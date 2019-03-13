const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./actions/data');

// let colnames = ['report_id', 'surname', 'othername', 'middlename', 'mobile', 'email', 'state_of_origin', 'occupation', 'marital_status', 'religion', 'lft_tp', 'lft_a', 'lft_tb', 'lft_db', 'lft_sgot', 'lft_sgpt', 'lft_ap', 'kft_urea', 'kft_creatinine', 'kft_chlorine', 'kft_potassium', 'kft_sodium', 'kft_bicarbonate', 'kft_ua', 'kft_ua', 'kft_ag', 'flp_tc', 'flp_t', 'flp_hc', 'flp_lc', 'bs_fbs', 'bs_rbs', 'v_hiv1', 'v_hiv2', 'v_hbsag', 'v_hcv', 'v_vdrl', 'v_hsv1', 'v_hsv2', 'bg', 'comment', 'day'];

var records = {
  fields: ['report_id', 'surname'  , 'othername' , 'middlename' , 'mobile'  , 'email'  , 'state_of_origin' , 'occupation' , 'marital_status'  , 'religion' , 'lft_tp' , 'lft_a' , 'lft_tb' , 'lft_db' , 'lft_sgot' , 'lft_sgpt' , 'lft_ap' , 'kft_urea' , 'kft_creatinine' , 'kft_chlorine' , 'kft_potassium' , 'kft_sodium' , 'kft_bicarbonate' , 'kft_ua' , 'kft_calcium' , 'kft_ag' , 'flp_tc' , 'flp_t' , 'flp_hc' , 'flp_lc' , 'bs_fbs' , 'bs_rbs' , 'v_hiv1' , 'v_hiv2' , 'v_hbsag' , 'v_hcv' , 'v_vdrl' , 'v_hsv1' , 'v_hsv2' , 'bg' , 'comment' , 'dayt', 'fbc_wbc' , 'fbc_lym' , 'fbc_mid' , 'fbc_gra' , 'fbc_ly' , 'fbc_mi' , 'fbc_gr' , 'fbc_rbc' , 'fbc_hgb' , 'fbc_hct' , 'fbc_mcv' , 'fbc_mch', 'gender', 'docname', 'rhfactor', 'genotype', 'form_id' ],

  create: function (data) {
    db.run(`INSERT INTO reports VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`,
    // 'VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);'
      data,
      function (err) {
        if (err) {
          return console.log(err.message);
        }
        // get the last insert id
        console.log(`A row has been inserted with rowid ${this.lastID}`);
      });
  },
  read_all: function (call, outer) {

    let sql = `SELECT report_id, surname, othername, state_of_origin, occupation, mobile, dayt, email  FROM reports ORDER BY report_id ASC`;

    var next = 0;

    recordActions.nextId(function (seq) {
      next = seq - 1;
    });

    db.each(sql, (err, row) => {

      var data = `` +
        `<tr>\n` +
        `\t<td class="text-center btn-info"><input type="checkbox" name="id" value="${row.report_id}"/></td>\n` +
        `\t<td>${row.report_id}</td>\n` +
        `\t<td>${row.surname} ${row.othername}</td>\n` +
        `\t<td>${row.occupation}</td>\n` +
        `\t<td>${row.dayt}</td>\n` +
        `\t<td>${row.state_of_origin}</td>\n` +
        `\t<td>${(row.mobile == undefined || row.mobile == '')? '' : '+234 ' + row.mobile}</td>\n` +
        `\t<td class="btn-default text-center"><a class="btn btn-sm" onclick="oneMail([${row.report_id}]);">${row.email}</a></td>\n` +
        `\t<td class="btn-default text-center"><a class="btn btn-sm" href="view-report.html?id=${row.report_id}">view</a></td>\n` +
        `\t<td class="btn-default text-center"><a class="btn btn-sm" onclick="oneDel(${row.report_id});">delete</a></td>\n` +
        `</tr>`

      call(data);

      if (row.report_id == next) {
        outer();
      }
    });
  },
  getWithId: function (id, call) {
    db.get(`SELECT * FROM reports WHERE report_id=${id}`, (err, row) => {
      call(row);
    });
  },
  update: function (id, data, call) {
    // db.run(`DELETE FROM reports WHERE report_id=?`, [data.report_id], function (err) {
    //   console.log(err);
    //   console.log(data);
    //   if(err){
    //     return;
    //   }
    console.log(data);
    
      db.run(`UPDATE reports SET ${data} report_id=${id} WHERE report_id=${id}`,
        // data,
        function (err, row) {
          if (err) {
            return console.log(err.message);
          }
          call(row);
          // get the last insert id
          // console.log(`A row has been inserted with rowid ${this.lastID}`);
        });
    // });
  },
  delete: function (id) {
    recordActions.getWithId(id, function (data) {

      console.log(id);
      // console.log(data);

      var rows = [];

      recordActions.fields.forEach(field => {
        rows.push(data[field]);
      });

      db.run(`INSERT INTO deletedreports VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`,
        rows,
        function (err) {
          if (err) {
            return console.log(err.message);
          }
          db.run(`DELETE FROM reports WHERE report_id=?`, [data.report_id], function (err) {

          });
          // get the last insert id
          console.log(`A row has been deleted with rowid ${this.lastID}`);
        });
    });
  },
  nextId: function (call) {
    db.get(`SELECT seq FROM sqlite_sequence WHERE name='reports'`, (err, row) => {
      call(row.seq + 1);
    });
  }
};

module.exports = records;