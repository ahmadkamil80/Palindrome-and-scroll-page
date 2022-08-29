Feature: Check string palindrome

	Scenario Outline: Periksa string palindrome
		Given Saya masukin string <kata>
		When Saya test apakah palindrome
		Then hasilnya harus <output>
		Examples:
			| kata		| output	|
			| "okok"	| "false" |
			| "bobob"	| "true" |
			| "bebeb"	| "true" |
			| "baik"	| "false" |