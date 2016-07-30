var unirest = require('unirest')

module.exports = {
  request: function () {
    unirest.post("https://repustate.p.mashape.com/v2/Hu5ZcCGlabmshcA8zHsHtQJxIt0dp1Q7pl9jsnfhm5DpxRMZfG/bulk-score.json")
      .header("X-Mashape-Key", "Hu5ZcCGlabmshcA8zHsHtQJxIt0dp1Q7pl9jsnfhm5DpxRMZfG")
      .header("Content-Type", "application/x-www-form-urlencoded")
      .header("Accept", "application/json")
      .send(`text2=a destroyed rural town&text3=happy&text4=Doer-upper&text5=Revival&text6=home&text7=broken&text8=Broken&text9=?&text10=beautiful&text11=Slow&text12=Eclectic&text13=broken&text14=Potential&text15=Stoic&text16=Beautiful&text17=Exciting&text18=turangawaewae&text19=Resurgent&text20=potential&text21=Unfinished&text22=Exciting&text23=Earthy&text24=Amazing&text25=Beautiful&text26=Fun&text27=Cool&text28=broken&text29=Messy&text30=HOME&text31=Empty&text32=Unique&text33=Emerging&text34=Awesome&text35=Diverse&text36=Diverse&text37=Home&text38=reviving&text39=Humming&text40=Broken&text41=disjointed&text42=struggling&text43=Hope&text44=Enjoyable&text45=Dull&text46=Modern nostalgia&text47=dynamic&text48=Change&text49=Kia kaha .&text50=sad`)
      .end(function (result) {
        console.log(result.status, result.headers, result.body)
      })
  }
}
