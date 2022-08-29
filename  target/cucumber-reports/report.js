$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/soalFeatureFiles/Soal1.feature");
formatter.feature({
  "name": "Check string palindrome",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Periksa string palindrome",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Saya masukin string \u003ckata\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "Saya test apakah palindrome",
  "keyword": "When "
});
formatter.step({
  "name": "hasilnya harus \u003coutput\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "kata",
        "output"
      ]
    },
    {
      "cells": [
        "\"okok\"",
        "\"false\""
      ]
    },
    {
      "cells": [
        "\"bobob\"",
        "\"true\""
      ]
    },
    {
      "cells": [
        "\"bebeb\"",
        "\"true\""
      ]
    },
    {
      "cells": [
        "\"baik\"",
        "\"false\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Periksa string palindrome",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Saya masukin string \"okok\"",
  "keyword": "Given "
});
formatter.match({
  "location": "definition.Soal1Defs.saya_masukin_string(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Saya test apakah palindrome",
  "keyword": "When "
});
formatter.match({
  "location": "definition.Soal1Defs.saya_test_apakah_palindrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hasilnya harus \"false\"",
  "keyword": "Then "
});
formatter.match({
  "location": "definition.Soal1Defs.hasilnya_harus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Periksa string palindrome",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Saya masukin string \"bobob\"",
  "keyword": "Given "
});
formatter.match({
  "location": "definition.Soal1Defs.saya_masukin_string(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Saya test apakah palindrome",
  "keyword": "When "
});
formatter.match({
  "location": "definition.Soal1Defs.saya_test_apakah_palindrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hasilnya harus \"true\"",
  "keyword": "Then "
});
formatter.match({
  "location": "definition.Soal1Defs.hasilnya_harus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Periksa string palindrome",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Saya masukin string \"bebeb\"",
  "keyword": "Given "
});
formatter.match({
  "location": "definition.Soal1Defs.saya_masukin_string(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Saya test apakah palindrome",
  "keyword": "When "
});
formatter.match({
  "location": "definition.Soal1Defs.saya_test_apakah_palindrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hasilnya harus \"true\"",
  "keyword": "Then "
});
formatter.match({
  "location": "definition.Soal1Defs.hasilnya_harus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Periksa string palindrome",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Saya masukin string \"baik\"",
  "keyword": "Given "
});
formatter.match({
  "location": "definition.Soal1Defs.saya_masukin_string(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Saya test apakah palindrome",
  "keyword": "When "
});
formatter.match({
  "location": "definition.Soal1Defs.saya_test_apakah_palindrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hasilnya harus \"false\"",
  "keyword": "Then "
});
formatter.match({
  "location": "definition.Soal1Defs.hasilnya_harus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/soalFeatureFiles/Soal3.feature");
formatter.feature({
  "name": "Check stok produk Tokopedia",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Periksa produk ditokopedia",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Saya berada pada di halaman utama \"https://www.tokopedia.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "definition.Soal3Defs.saya_berada_pada_di_halaman_utama(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Saya memasukan key \"Sweater\"",
  "keyword": "When "
});
formatter.match({
  "location": "definition.Soal3Defs.saya_memasukan_key(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Saya klik pencarian",
  "keyword": "And "
});
formatter.match({
  "location": "definition.Soal3Defs.saya_klik_pencarian()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Saya melakukan scroll halaman untuk mengetahui berapa jumlah produk yg ada",
  "keyword": "And "
});
formatter.match({
  "location": "definition.Soal3Defs.saya_melakukan_scroll_halaman_untuk_mengetahui_berapa_jumlah_produk_yg_ada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Menampilkan hasil jumlah produk",
  "keyword": "Then "
});
formatter.match({
  "location": "definition.Soal3Defs.menampilkan_hasil_jumlah_produk()"
});
formatter.result({
  "status": "passed"
});
});