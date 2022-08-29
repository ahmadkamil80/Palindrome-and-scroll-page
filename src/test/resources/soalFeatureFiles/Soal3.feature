Feature: Check stok produk Tokopedia

	Scenario: Periksa produk ditokopedia
		Given Saya berada pada di halaman utama "https://www.tokopedia.com/"
		When Saya memasukan key "Sweater"
		And Saya klik pencarian
		And Saya melakukan scroll halaman untuk mengetahui berapa jumlah produk yg ada
		Then Menampilkan hasil jumlah produk