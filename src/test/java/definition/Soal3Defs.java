package definition;

import static org.testng.Assert.assertTrue;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Soal3Defs {
	
	WebDriver driver;
	
	@Given("Saya berada pada di halaman utama {string}")
	public void saya_berada_pada_di_halaman_utama(String string) {
		String path = System.getenv("WEBDRIVER");
		System.setProperty("webdriver.chrome.driver", path);
		driver = new ChromeDriver();
		driver.get(string);
		driver.manage().window().maximize();
	}

	@When("Saya memasukan key {string}")
	public void saya_memasukan_key(String string) {
		driver.findElement(By.xpath("//input[@data-unify='Search']")).sendKeys(string);
	}
	
	@When("Saya klik pencarian")
	public void saya_klik_pencarian() {
		driver.findElement(By.xpath("//button[@aria-label='Kirimkan']")).click();
	}

	@When("Saya melakukan scroll halaman untuk mengetahui berapa jumlah produk yg ada")
	public void saya_melakukan_scroll_halaman_untuk_mengetahui_berapa_jumlah_produk_yg_ada() {
		boolean state = true;
		
		while (state) {
			try {
				JavascriptExecutor js = (JavascriptExecutor) driver;
				for (int y = 0; y <= 200; y++) {
					js.executeScript("window.scrollBy(0, " + y + ")");
					state = false;
				}
			} catch (Exception e) { }
		}		
	}

	@Then("Menampilkan hasil jumlah produk")
	public void menampilkan_hasil_jumlah_produk() {
		int sizeExpect = 80;
		
		List<WebElement> harga = this.driver.findElements(By.xpath("//div[@data-testid='spnSRPProdPrice']"));
		System.out.println(harga.size());
		assertTrue(sizeExpect == harga.size());
		
		driver.quit();
	}

}
