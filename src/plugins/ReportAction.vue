<style scoped>
@charset "UTF-8";
@media all{
    .title {
      margin-top: -20px;
      margin-left: 481px;
      align-content: center;
      position: absolute;
      width: 200px !important;
      border: 2px solid #ddd9c3;
      border-radius: 4px;
      align-items: center;
      page-break-inside: avoid;
      clear: both;

      background: #fff;
    }
    td{
      padding: 3px;
      color: #000 !important;
    }
    .field {
      border: solid black 1px;
      height: 25px;
      min-width: 125px;
      width: auto !important;
      max-width: 220px;
      text-rendering: optimizeLegibility;
      flex-wrap: wrap;
      word-wrap: break-word;
      padding: 3px 5px 3px 5px;
    }
    body{
      text-align: center !important;
      color: #000 !important;
      background: #fff; 
    }
    .head{
      display: block;
      height: 180px;
      width: 100%;
      background: #ccc;

    }
    #img {
      background: white;
      border-radius: 5px;
      float: left;
      width: 150px !important;
      height: 150px !important;
      padding: -20 !important;
      margin: 15px !important;
      /*margin-top: 30px;*/
    }
    #img-red {
      /*width: 150px !important;*/
      height: 150px !important;
      /*padding: -20 !important;*/
      margin-left: -100px !important;
      /*margin-top: 30px;*/
    }
  }
/*
    .row{
      text-align: center;
      align-self: center;
      align-content: center;
      align-items: center;

    }*/
</style>
<template>
  <div class="center-block" id="pop" align="center" style="border-width: 0.5px 0 0 0.5px; border-style: solid; border-color: #888; padding: 3px; z-index: 99999; background: #fff; position: absolute; top: 0; left: 0; width: 1250px !important;">
    <div class="head" style="display: block; height: 180px; width: 100%; background: #ccc !important;">
      <!-- <img src="../assets/img.png" class="img-rounded" id="logo"/> -->
      <div id="">
        <img id="img" src="@/assets/logo.png" style="background: white; border-radius: 5px;">
      </div>
      <div class="head-text">.
        <img id="img-red" src="@/assets/logo_red.png">
        <!-- <b>SCOBI.ewf-slider .ewf-slider__slides li .ewf-slider-slide__contentLONG RESOURCES GLOBAL MEDICAL CONSULTING LIMITED.</b> -->
      </div>
      <!-- <div style="z-index: 99999; position: absolute; float: right; align-self: flex-end;margin-left: 890px; margin-top: 200px; width: 200px; font-size: 12px;font-style: italic;"> -->
      <div style=" float: right; align-self: flex-end; margin-right: 20px;">
        <b> RC: 1385419 </b>
      </div>
    </div>
    <br/>
    <div class="text-center title" align="center" style="margin-top: -44px; padding: 10px; text-wrap: none;">
      <b class>Laboratoy report</b>
    </div>
    <b-row>
      <b-col md="12" class="pull-left" style="height: auto !important;">
        <table border="0" class spacing="0">
          <tr>
            <td class>Report ID</td>
            <td >Mobile</td>
            <td >Email</td>
          </tr>
          <tr>  
            <td class="field" >{{report.details.form_id}}</td>
            <td class="field" >{{report.details.mobile}}</td>
            <td class="field" >{{report.details.email}}</td>
          </tr>
          <tr>
            <td>-</td>
          </tr><!-- 
          </table>
        </b-col>
        <b-col md="12">
	       <table border="0" class="" spacing="0"> -->
          <tr>
            <td >Surname</td>
            <td >Firstname</td>
            <td >Middlename</td>
            <td >Gender</td>
            <td >State Of Origin</td>
            <td >Occupation</td>
            <td >Matial Status</td>
            <td >Religion</td>
          </tr>
          <tr>
            <td class="field" >{{report.details.surname}}</td>
            <td class="field" >{{report.details.firstname}}</td>
            <td class="field" >{{report.details.middlename}}</td>
            <td class="field" >{{report.details.gender}}</td>
            <td class="field" >{{report.details.state_of_origin}}</td>
            <td class="field" >{{report.details.occupation}}</td>
            <td class="field" >{{report.details.marital_status}}</td>
            <td class="field" >{{report.details.religion}}</td>
          </tr>
          <tr>
            <td>-</td>
          </tr>
          <tr>
          </tr>
          <tr>
          </tr>
        </table>
      </b-col>
      <b-col md="6" class="mt-5">
          <b>Liver Function Test</b>
          <br>
        <table border="0" class="mt-3" spacing="0">
          <tr>
            <td class></td>
            <td class>NORMAL RANGE</td>
            <td class>RESULT</td>
          </tr>
          <tr>
            <td class="field">TOTAL PROTEIN</td>
            <td class="field">6.6-8.7g/dl</td>
            <td class="field" >{{report.lft.lft_tp}}</td>
          </tr>
          <tr>
            <td class="field">ALBUMIN</td>
            <td class="field">3.8-4.0g/dl</td>
            <td class="field" >{{report.lft.lft_a}}</td>
          </tr>
          <tr>
            <td class="field">TOTAL BILIRUBIN</td>
            <td class="field">0-1g/dl</td>
            <td class="field" >{{report.lft.lft_tb}}</td>
          </tr>
          <tr>
            <td class="field">BILIRUBIN</td>
            <td class="field">0-0.25mg/dl</td>
            <td class="field" >{{report.lft.lft_db}}</td>
          </tr>
          <tr>
            <td class="field">SGOT</td>
            <td class="field">0-27U/L</td>
            <td class="field" >{{report.lft.lft_sgot}}</td>
          </tr>
          <tr>
            <td class="field">SGPT</td>
            <td class="field">0-27U/L</td>
            <td class="field" >{{report.lft.lft_sgpt}}</td>
          </tr>
          <tr>
            <td class="field">ALKALINE PHOSPHATASE</td>
            <td class="field">21-92U/L</td>
            <td class="field" >{{report.lft.lft_ap}}</td>
          </tr>
        </table>
      </b-col>
      <b-col md="6" class="mt-5">
          <b>Kidney Function Test</b>
          <br>
        <table border="0" class spacing="0">
          <tr>
            <td class></td>
            <td class>NORMAL RANGE</td>
            <td class>RESULT</td>
          </tr>
          <tr>
            <td class="field">UREA</td>
            <td class="field">10-55mg/dl</td>
            <td class="field" >{{report.kft.kft_urea}}</td>
          </tr>
          <tr>
            <td class="field">CREATININE</td>
            <td class="field">0.6-1.2mg/dl</td>
            <td class="field" >{{report.kft.kft_creatinine}}</td>
          </tr>
          <tr>
            <td class="field">CHLORIDE</td>
            <td class="field">98-108mmol/L</td>
            <td class="field" >{{report.kft.kft_chlorine}}</td>
          </tr>
          <tr>
            <td class="field">POTASSIUM</td>
            <td class="field">3.5-5.0mmol/L</td>
            <td class="field" >{{report.kft.kft_potassium}}</td>
          </tr>
          <tr>
            <td class="field">SODIUM</td>
            <td class="field">35-145mmol/L</td>
            <td class="field" >{{report.kft.kft_sodium}}</td>
          </tr>
          <tr>
            <td class="field">BICARBONATE</td>
            <td class="field">21-31mmol/L</td>
            <td class="field" >{{report.kft.kft_bicarbonate}}</td>
          </tr>
          <tr>
            <td class="field">URIC ACID</td>
            <td class="field">3.5-7.0mg/dl</td>
            <td class="field" >{{report.kft.kft_ua}}</td>
          </tr>
          <tr>
            <td class="field">CALCIUM</td>
            <td class="field">8.1-10.4mg/dl</td>
            <td class="field" >{{report.kft.kft_calcium}}</td>
          </tr>
          <tr>
            <td style="border: none; height: 10px;"></td>
          </tr>
          <tr>
            <td class="field">ANION GAP</td>
            <td class></td>
            <td class="field" >{{report.kft.kft_ag}}</td>
          </tr>
        </table>
      </b-col>

      <b-col md="6" class="mt-5">
          <b>Fasting Lipid Profile</b>
          <br>
        <table border="0" class spacing="0">
          <tr>
            <td class></td>
            <td class>NORMAL RANGE</td>
            <td class>RESULT</td>
          </tr>
          <tr>
            <td class="field">T CHOLESTEROL</td>
            <td class="field">150-200mg/dl</td>
            <td class="field" >{{report.flp.flp_tc}}</td>
          </tr>
          <tr>
            <td class="field">TRIGLYCERIDE</td>
            <td class="field">74-200mg/dl</td>
            <td class="field" >{{report.flp.flp_t}}</td>
          </tr>
          <tr>
            <td class="field">HDL CHOLESTEROL</td>
            <td class="field">35-60mg/dl</td>
            <td class="field" >{{report.flp.flp_hc}}</td>
          </tr>
          <tr>
            <td class="field">LDL CHOLESTEROL</td>
            <td class="field">&lt;160mg/dl</td>
            <td class="field" >{{report.flp.flp_lc}}</td>
          </tr>
        </table>
      </b-col>
      <b-col md="6" class="mt-5">
          <b>Virology</b>
          <br>
        <table border="0" class spacing="0">
          <tr>
            <td class></td>
            <td class>RESULT</td>
          </tr>
          <tr>
            <td class="field">HIV 1</td>
            <td class="field" style="width: 200px !important;"> {{report.v.v_hiv1}}</td>
          </tr>
          <tr>
            <td class="field">HIV 2</td>
            <td class="field"> {{report.v.v_hiv2}}</td>
          </tr>
          <tr>
            <td class="field">HBsAG</td>
            <td class="field" >{{report.v.v_hbsag}}</td>
          </tr>
          <tr>
            <td class="field">HCV</td>
            <td class="field" >{{report.v.v_hcv}}</td>
          </tr>
          <tr>
            <td class="field">VDRL</td>
            <td class="field" >{{report.v.v_vdrl}}</td>
          </tr>
          <tr>
            <td class="field">HSV 1</td>
            <td class="field"> {{report.v.v_hsv1}}</td>
          </tr>
          <tr>
            <td class="field">HSV 2</td>
            <td class="field" >{{report.v.v_hsv2}}</td>
          </tr>
        </table>
      </b-col>
      <b-col md="6" class="mt-5">
          <b>Blood Sugar</b>
          <br>
        <table border="0" class spacing="0">
          <tr>
            <td class></td>
            <td class>NORMAL RANGE</td>
            <td class>RESULT</td>
          </tr>
          <tr>
            <td class="field" style="width: 170px !important;">FASTING BLOOD SUGAR</td>
            <td class="field">65-115mg/dl</td>
            <td class="field" >{{report.bs.bs_fbs}}</td>
          </tr>
          <tr>
            <td class="field">RANDOM BLOOD SUGAR</td>
            <td class="field">79-160mg/dl</td>
            <td class="field" >{{report.bs.bs_rbs}}</td>
          </tr>
        </table>
      </b-col>
      <b-col md="6" class="mt-5">
          <b class>Haematology Test</b>
          <br>
        <table border="0" class spacing="0">
          <tr>
            <td class></td>
            <td class="field">GENOTYPE</td>
            <td class="field" >{{report.blood.genotype}}</td>
            <td class></td>
          </tr>
          <tr>
            <td style="border: none; height: 10px;"></td>
          </tr>
          <tr>
            <td class="field">BLOOD GROUP</td>
            <td class="field" >{{report.blood.bg}}</td>
            <td class="field">RHESUS FACTOR</td>
            <td class="field" >{{report.blood.rhfactor}}</td>
          </tr>
        </table>
      </b-col>
      <b-col md="6" class="mt-5">
          <b class>Full Blood Count With Platelets (Hb, PCV, WBC(T&D), Incl red cell indices)</b>
          <br>
        <table border="0" CLASS spacing="0">
          <tr>
            <td class="field">WBC</td>
            <td class="field" >{{report.blood.fbc_wbc}}</td>
            <td class="field">10^9/L</td>
            <td class="field">(Ad:2.6 - 11, Inf:4 - 15)</td>
          </tr>
          <tr>
            <td class="field">LYM</td>
            <td class="field" >{{report.blood.fbc_lym}}</td>
            <td class="field">10^9/L</td>
            <td class="field">(1.3 - 4)</td>
          </tr>
          <tr>
            <td class="field">MID</td>
            <td class="field" >{{report.blood.fbc_mid}}</td>
            <td class="field">10^9/L</td>
            <td class="field">(0.15 - 0.7)</td>
          </tr>
          <tr>
            <td class="field">GRA</td>
            <td class="field" >{{report.blood.fbc_gra}}</td>
            <td class="field">10^9/L</td>
            <td class="field">(2.5 - 7.5)</td>
          </tr>
          <tr>
            <td class="field">LY%</td>
            <td class="field" >{{report.blood.fbc_ly}}</td>
            <td class="field">%</td>
            <td class="field">(Ad:20 - 45, Inf:40 - 75)</td>
          </tr>
          <tr>
            <td class="field">MI%</td>
            <td class="field" >{{report.blood.fbc_mi}}</td>
            <td class="field">%</td>
            <td class="field">(1 - 10)</td>
          </tr>
          <tr>
            <td class="field">GR%</td>
            <td class="field" >{{report.blood.fbc_gr}}</td>
            <td class="field">%</td>
            <td class="field">(Ad:40 - 75, Inf:20 - 45)</td>
          </tr>
          <tr>
            <td class="field">RBC</td>
            <td class="field" >{{report.blood.fbc_rbc}}</td>
            <td class="field">10^12/L</td>
            <td class="field">(M:4.5 - 6.5, F:3.8 - 5)</td>
          </tr>
          <tr>
            <td class="field">HGB</td>
            <td class="field" >{{report.blood.fbc_hgb}}</td>
            <td class="field">g/dl</td>
            <td class="field">(M:13.5 - 17.5, F:11 - 16)</td>
          </tr>
          <tr>
            <td class="field">HCT</td>
            <td class="field" >{{report.blood.fbc_hct}}</td>
            <td class="field">%</td>
            <td class="field">(M:40 - 52, F:33 - 48)</td>
          </tr>
          <tr>
            <td class="field">MCV</td>
            <td class="field" >{{report.blood.fbc_mcv}}</td>
            <td class="field">fl</td>
            <td class="field">(76 - 96)</td>
          </tr>
          <tr>
            <td class="field">MCH</td>
            <td class="field" >{{report.blood.fbc_mch}}</td>
            <td class="field">pg</td>
            <td class="field" style="width: 150px !important;">(27 - 32)</td>
          </tr>
        </table>
      </b-col>
      <b-col md="6" class="mt-5">
          <b class>Urinalysis</b>
          <br>
        <table border="0" class spacing="0">
          <tr>
            <td class="field">APPEARANCE</td>
            <td class="field" >{{report.u.u_a}}</td>
          </tr>
          <tr>
            <td class="field">PH</td>
            <td class="field" >{{report.u.u_ph}}</td>
          </tr>
          <tr>
            <td class="field">SPECIFIC GRAVITY</td>
            <td class="field" >{{report.u.u_sg}}</td>
          </tr>
          <tr>
            <td class="field">GLUCOSE</td>
            <td class="field" >{{report.u.u_g}}</td>
          </tr>
          <tr>
            <td class="field">KETONE</td>
            <td class="field" >{{report.u.u_k}}</td>
          </tr>
          <tr>
            <td class="field">PROTEIN</td>
            <td class="field" >{{report.u.u_p}}</td>
          </tr>
          <tr>
            <td class="field">NITRITES</td>
            <td class="field" >{{report.u.u_n}}</td>
          </tr>
          <tr>
            <td class="field">UROBILINOGEN</td>
            <td class="field" >{{report.u.u_ub}}</td>
          </tr>
          <tr>
            <td class="field">BILIRUBIN</td>
            <td class="field" >{{report.u.u_b}}</td>
          </tr>
          <tr>
            <td class="field">BLOOD</td>
            <td class="field" >{{report.u.u_blood}}</td>
          </tr>
          <tr>
            <td class="field">ASCORBIC ACID</td>
            <td class="field" >{{report.u.u_aa}}</td>
          </tr>
          <tr>
            <td class="field">LEUCOCYTE</td>
            <td class="field" >{{report.u.u_leucocyte}}</td>
          </tr>
        </table>
      </b-col>
      <!-- <div class="row"> -->
        <b-col md="7" class="mt-5 form-group input-label">
          <label>Doctor Comment</label>
          <textarea class="form-control" style="resize: none;max-lines: 8;max-height: 200px;min-height: 200px; margin: 0 50px 0 50px;">{{report.r.comment}}</textarea>
        </b-col>
        <b-col md="3" class="mt-5 form-group input-label" style=" margin: 0 50px 0 50px;">
          <br>
          <label>
            Doctor Name
            <input v-model="report.r.docname" class="form-control">
          </label>
          <br>
          <br>
          <br>
          <br>
          <label>
            Signature
            <input class="form-control">
          </label>
          <!-- <label class="row">Doctor Name/Signature
					<input class="form-control">
          </label>-->
        </b-col>
        <!-- <iframe :src="r"></iframe> -->
      <!-- </div> -->
    </b-row>
    <b-row>
      <b-col md="12">
        <hr style="border: #011 2px double; width: 90%; border-radius: 20px;">
      </b-col>
      <b-col md="3">
        <h3>
          <u>
            <b>
              <i>Disclaimer</i>
            </b>
          </u>
        </h3>
      </b-col>
      <b-col md="9">
        <b>
          <i>
            This is a health screening tool/ programme and not intended to be diagnostic.
            <br/>
            It DOES NOT replace the professional management/advice of your attending physician.
          </i>
        </b>
      </b-col>
    </b-row>
  </div>
</template>
<script>
// window.report
export default {
  data() {
    return {
      r: '',
      report: {
        details: {},
        blood: {},
        bs: {},
        flp: {},
        kft: {},
        lft: {},
        r: {},
        u: {},
        v: {}
      },
      ve: ""
    };
  },
  methods: {
    load_report() {
      // alert(this.report.details.form_id);
      var t = this;
      window.reports.get(this.report.details.form_id).then(function (doc){
        t.report = doc;
        t.report_is_loaded = true;
        // 
      }).catch(function (err) {
        alert(err);
      });
      // console.log(rv);
    }
  },
  mounted() {
    if(this.$route.params.id == undefined){
      return;
    }
    var action = this.$route.params.action;
    this.report.details.form_id = this.$route.params.id;
    this.load_report()

    if(action == 'print'){
        setTimeout("window.print();", 2000);
        //window.print()
        this.$store.commit('print', '');
        alert(t.$store.state.reportaction.print);
        return;
      }
    var t = this
    function exec() {
      
      // function makePDF() {
      var jsPDF = require("jspdf");
      var html2canvas = require("html2canvas");
       var quotes = document.getElementById('pop');
       html2canvas(quotes)
      .then((canvas) => {
            //! MAKE YOUR PDF
            var pdf = new jsPDF('p', 'pt', [950, 1900]);

            for (var i = 0; i <= quotes.clientHeight/2500; i++) {
                //! This is all just html2canvas stuff
                var srcImg  = canvas;
                var sX      = 0;
                var sY      = 980*i; // start 980 pixels down for every new page
                var sWidth  = 3000;
                var sHeight = 3000;
                var dX      = 0;
                var dY      = 0;
                var dWidth  = 3000;
                var dHeight = 3000;

                window.onePageCanvas = document.createElement("canvas");
                onePageCanvas.setAttribute('width', 1250);
                onePageCanvas.setAttribute('height', 2500);
                var ctx = onePageCanvas.getContext('2d');
                // details on this usage of this function: 
                // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images#Slicing
                ctx.drawImage(srcImg,sX,sY,sWidth,sHeight,dX,dY,dWidth,dHeight);

                // document.body.appendChild(canvas);
                var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);

                var width         = onePageCanvas.clientWidth;
                var height        = onePageCanvas.clientHeight;

                //! If we're on anything other than the first page,
                // add another page
                if (i > 0) {
                    pdf.addPage(1000, 1700); //8.5" x 11" in pts (in*72)
                }
                //! now we declare that we're working on that page
                pdf.setPage(i+1);
                //! now we add content to that page!
                pdf.addImage(canvasDataURL, 'PNG', 5, 5, ((width)*.9), (height*.62));

            }
            //! after the for loop is finished running, we save the pdf.


            if(action == 'mail'){
              var row = t.report.details;
              var nodemailer = require("nodemailer");
              var transporter = nodemailer.createTransport({
                host: "mail.chibuezeharry.com",
                port: 587,
                secure: false, // use TLS
                tls: {
                  // do not fail on invalid certs
                  rejectUnauthorized: false
                },
                auth: {
                  user: "bueze@chibuezeharry.com",
                  pass: "P@yr00ll"
                  //Srgmc08039482946
                }
              });
              var mailOptions = {
                from: "favour@chibuezeharry.com",
                to: row.email,
                subject: "Test Report",
                html: `Good Day ${row.gender == "Male" ? "Mr" : "Mrs"} ${row.lastname} From SCOBILONG RESOURCES GLOBAL MEDICAL CONSULTING LIMITED`,
                attachments: [
                  {
                    name: `${row.gender == "Male" ? "Mr" : "Mrs"} ${row.surname} ${row.firstname}'s report.pdf`,
                    path: pdf.output("datauristring")
                  }
                ]
              };
              transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                  console.log(error);
                  alert("Mail not sent.   Check network connection.");
                  // window.location = '';
                } else {
                  console.log("Email sent: " + info.response);

              alert("Mail sent.");

                }
        t.$store.commit('mail', '');
              });
            }
            if(action == 'save'){
              pdf.save('Test.pdf');
        t.$store.commit('save', '');

            }
        });
    //   // }
    
      // t.$store.state.location = '';

    //   makePDF();
    }

    setTimeout(exec, 2000);
    // window.location = '';
  }
};
</script>