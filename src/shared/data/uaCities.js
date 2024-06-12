const uaCities = [
    {
        name: "Autonomous Republic of Crimea",
        cities: [
            {
                name: "Alupka"
            },
            {
                name: "Alushta"
            },
            {
                name: "Armiansk"
            },
            {
                name: "Bakhchysarai"
            },
            {
                name: "Bilohirsk"
            },
            {
                name: "Dzhankoi"
            },
            {
                name: "Yevpatoria"
            },
            {
                name: "Kerch"
            },
            {
                name: "Krasnoperekopsk"
            },
            {
                name: "Saky"
            },
            {
                name: "Sevastopol"
            },
            {
                name: "Simferopol"
            },
            {
                name: "Staryi Krym"
            },
            {
                name: "Sudak"
            },
            {
                name: "Feodosia"
            },
            {
                name: "Shcholkine"
            },
            {
                name: "Yalta"
            }
        ]
    },
    {
        name: "Vinnytsia region",
        cities: [
            {
                name: "Bar"
            },
            {
                name: "Bershad"
            },
            {
                name: "Vinnytsia"
            },
            {
                name: "Haisyn"
            },
            {
                name: "Zhmerynka"
            },
            {
                name: "Kozyatyn"
            },
            {
                name: "Kalinivka"
            },
            {
                name: "Ladyzhyn"
            },
            {
                name: "Mohyliv-Podilskyi"
            },
            {
                name: "Nemyriv"
            },
            {
                name: "Pohrebyshche"
            },
            {
                name: "Tulchyn"
            },
            {
                name: "Khmelnyk"
            },
            {
                name: "Sharhorod"
            },
            {
                name: "Yampil"
            }
        ]
    },
    {
        name: "Volyn region",
        cities: [
            {
                name: "Berestechko"
            },
            {
                name: "Volodymyr-Volynskyi"
            },
            {
                name: "Horokhiv"
            },
            {
                name: "Kamin-Kashyrskyi"
            },
            {
                name: "Kivertsi"
            },
            {
                name: "Kovel"
            },
            {
                name: "Lutsk"
            },
            {
                name: "Liuboml"
            },
            {
                name: "Novovolynsk"
            },
            {
                name: "Rozhyshche"
            },
            {
                name: "Ustyluh"
            }
        ]
    },
    {
        name: "Dnipropetrovsk region",
        cities: [
            {
                name: "Apostolove"
            },
            {
                name: "Verkhnodniprovsk"
            },
            {
                name: "Vilnohirsk"
            },
            {
                name: "Kamianske"
            },
            {
                name: "Dnipro"
            },
            {
                name: "Zhovti Vody"
            },
            {
                name: "Kryvyi Rih"
            },
            {
                name: "Marhanets"
            },
            {
                name: "Nikopol"
            },
            {
                name: "Novomoskovsk"
            },
            {
                name: "Pokrov"
            },
            {
                name: "Pavlohrad"
            },
            {
                name: "Pereshchepyne"
            },
            {
                name: "Pershotravensk"
            },
            {
                name: "Pidhirne"
            },
            {
                name: "Piatykhatky"
            },
            {
                name: "Synelnykove"
            },
            {
                name: "Ternivka"
            }
        ]
    },
    {
        name: "Donetsk region",
        cities: [
            {
                name: "Avdiivka"
            },
            {
                name: "Bakhmut"
            },
            {
                name: "Volnovakha"
            },
            {
                name: "Horlivka"
            },
            {
                name: "Dzerzhynsk"
            },
            {
                name: "Debaltseve"
            },
            {
                name: "Dymytriv"
            },
            {
                name: "Dobropillia"
            },
            {
                name: "Dokuchaievsk"
            },
            {
                name: "Druzhkivka"
            },
            {
                name: "Kostiantynivka"
            },
            {
                name: "Kramatorsk"
            },
            {
                name: "Krasnohorivka"
            },
            {
                name: "Lyman"
            },
            {
                name: "Kurakhove"
            },
            {
                name: "Mariupol"
            },
            {
                name: "Mykolaivka"
            },
            {
                name: "Novoazovsk"
            },
            {
                name: "Selidove"
            },
            {
                name: "Siversk"
            },
            {
                name: "Sloviansk"
            },
            {
                name: "Snizhne"
            },
            {
                name: "Soledar"
            },
            {
                name: "Toretsk"
            },
            {
                name: "Ukrainsk"
            },
            {
                name: "Vuhledar"
            },
            {
                name: "Yasynuvata"
            }
        ]
    },
    {
        name: "Zhytomyr region",
        cities: [
            {
                name: "Andrushivka"
            },
            {
                name: "Baranivka"
            },
            {
                name: "Berdychiv"
            },
            {
                name: "Chudniv"
            },
            {
                name: "Korosten"
            },
            {
                name: "Malyn"
            },
            {
                name: "Novohrad-Volynskyi"
            },
            {
                name: "Ovruch"
            },
            {
                name: "Radomyshl"
            },
            {
                name: "Zhytomyr"
            }
        ]
    },
    {
        name: "Zakarpattia region",
        cities: [
            {
                name: "Berehove"
            },
            {
                name: "Chop"
            },
            {
                name: "Khust"
            },
            {
                name: "Mukachevo"
            },
            {
                name: "Rakhiv"
            },
            {
                name: "Svaliava"
            },
            {
                name: "Tiachiv"
            },
            {
                name: "Uzhhorod"
            },
            {
                name: "Vynohradiv"
            }
        ]
    },
    {
        name: "Zaporizhzhia region",
        cities: [
            {
                name: "Berdiansk"
            },
            {
                name: "Enerhodar"
            },
            {
                name: "Huliaipole"
            },
            {
                name: "Kamianka-Dniprovska"
            },
            {
                name: "Melitopol"
            },
            {
                name: "Orikhiv"
            },
            {
                name: "Polohy"
            },
            {
                name: "Tokmak"
            },
            {
                name: "Vasylivka"
            },
            {
                name: "Zaporizhzhia"
            }
        ]
    },
    {
        name: "Ivano-Frankivsk region",
        cities: [
            {
                name: "Bolekhiv"
            },
            {
                name: "Burshtyn"
            },
            {
                name: "Dolyna"
            },
            {
                name: "Halych"
            },
            {
                name: "Horodenka"
            },
            {
                name: "Ivano-Frankivsk"
            },
            {
                name: "Kalush"
            },
            {
                name: "Kolomyia"
            },
            {
                name: "Nadvirna"
            },
            {
                name: "Rohatyn"
            },
            {
                name: "Sniatyn"
            },
            {
                name: "Tlumach"
            },
            {
                name: "Yaremche"
            }
        ]
    },
    {
        name: "Kyiv region",
        cities: [
            {
                name: "Bila Tserkva"
            },
            {
                name: "Boiarka"
            },
            {
                name: "Boryspil"
            },
            {
                name: "Brovary"
            },
            {
                name: "Bucha"
            },
            {
                name: "Fastiv"
            },
            {
                name: "Irpin"
            },
            {
                name: "Kaharlyk"
            },
            {
                name: "Obukhiv"
            },
            {
                name: "Pereiaslav"
            },
            {
                name: "Rzhyschiv"
            },
            {
                name: "Skvyra"
            },
            {
                name: "Slavutych"
            },
            {
                name: "Tarashcha"
            },
            {
                name: "Tetiiv"
            },
            {
                name: "Uzyn"
            },
            {
                name: "Vasylkiv"
            },
            {
                name: "Vyshhorod"
            },
            {
                name: "Yahotyn"
            }
        ]
    },
    {
        name: "Kirovohrad region",
        cities: [
            {
                name: "Blahovishchenske"
            },
            {
                name: "Bobrynets"
            },
            {
                name: "Dolynska"
            },
            {
                name: "Haivoron"
            },
            {
                name: "Kropyvnytskyi"
            },
            {
                name: "Mala Vyska"
            },
            {
                name: "Novomyrhorod"
            },
            {
                name: "Novoukrainka"
            },
            {
                name: "Oleksandriia"
            },
            {
                name: "Pomichna"
            },
            {
                name: "Svitlovodsk"
            }
        ]
    },
    {
        name: "Luhansk region",
        cities: [
            {
                name: "Alchevsk"
            },
            {
                name: "Antratsyt"
            },
            {
                name: "Brianka"
            },
            {
                name: "Dovzhansk"
            },
            {
                name: "Holubivka"
            },
            {
                name: "Kadiivka"
            },
            {
                name: "Kreminna"
            },
            {
                name: "Krasnodon"
            },
            {
                name: "Krasnyi Luch"
            },
            {
                name: "Luhansk"
            },
            {
                name: "Lysychansk"
            },
            {
                name: "Pervomaisk"
            },
            {
                name: "Rovenky"
            },
            {
                name: "Rubizhne"
            },
            {
                name: "Severodonetsk"
            },
            {
                name: "Shchastia"
            },
            {
                name: "Svatove"
            },
            {
                name: "Starobilsk"
            }
        ]
    },
    {
        name: "Lviv region",
        cities: [
            {
                name: "Belz"
            },
            {
                name: "Bobrka"
            },
            {
                name: "Boryslav"
            },
            {
                name: "Brody"
            },
            {
                name: "Busk"
            },
            {
                name: "Hlyniany"
            },
            {
                name: "Horodok"
            },
            {
                name: "Dobromyl"
            },
            {
                name: "Drohobych"
            },
            {
                name: "Zhydachiv"
            },
            {
                name: "Zolochiv"
            },
            {
                name: "Kamianets-Podilskyi"
            },
            {
                name: "Lviv"
            },
            {
                name: "Mostyska"
            },
            {
                name: "Mykolaiv"
            },
            {
                name: "Novoiavorivsk"
            },
            {
                name: "Peremyshliany"
            },
            {
                name: "Rava-Ruska"
            },
            {
                name: "Radekhiv"
            },
            {
                name: "Rudky"
            },
            {
                name: "Sambir"
            },
            {
                name: "Skole"
            },
            {
                name: "Sokal"
            },
            {
                name: "Staryi Sambir"
            },
            {
                name: "Stryi"
            },
            {
                name: "Truskavets"
            },
            {
                name: "Uhnev"
            },
            {
                name: "Khyrov"
            },
            {
                name: "Chervonohrad"
            },
            {
                name: "Yavoriv"
            }
        ]
    },
    {
        name: "Mykolaiv region",
        cities: [
            {
                name: "Bashtanka"
            },
            {
                name: "Voznesensk"
            },
            {
                name: "Mykolaiv"
            },
            {
                name: "Nova Odesa"
            },
            {
                name: "Novyi Buh"
            },
            {
                name: "Ochakiv"
            },
            {
                name: "Snihurivka"
            },
            {
                name: "Yuzhnoukrainsk"
            }
        ]
    },
    {
        name: "Odessa region",
        cities: [
            {
                name: "Artsyz"
            },
            {
                name: "Balta"
            },
            {
                name: "Bilhorod-Dnistrovskyi"
            },
            {
                name: "Biliaivka"
            },
            {
                name: "Bolhrad"
            },
            {
                name: "Izmail"
            },
            {
                name: "Kiliya"
            },
            {
                name: "Kodyma"
            },
            {
                name: "Rozdilna"
            },
            {
                name: "Reni"
            },
            {
                name: "Tatarbunary"
            },
            {
                name: "Teplodar"
            },
            {
                name: "Yuzhne"
            }
        ]
    },
    {
        name: "Poltava region",
        cities: [
            {
                name: "Viper"
            },
            {
                name: "Depth"
            },
            {
                name: "Comb"
            },
            {
                name: "Zenkov"
            },
            {
                name: "Karlovka"
            },
            {
                name: "Kremenchug"
            },
            {
                name: "Doggies"
            },
            {
                name: "Komsomolsk"
            },
            {
                name: "Lohvitsa"
            },
            {
                name: "Lubny"
            },
            {
                name: "Myrhorod"
            },
            {
                name: "Pyratyn"
            },
            {
                name: "Poltava"
            },
            {
                name: "Horol"
            },
            {
                name: "Chervonozavodskoe"
            }
        ]
    },
    {
        name: "Rovno region",
        cities: [
            {
                name: "March"
            },
            {
                name: "Dubno"
            },
            {
                name: "Dubrovitsa"
            },
            {
                name: "Zdolbunov"
            },
            {
                name: "Koretz"
            },
            {
                name: "Kostopol"
            },
            {
                name: "Kuznetsovsk"
            },
            {
                name: "Ostrog"
            },
            {
                name: "Radyvylov"
            },
            {
                name: "Equally"
            },
            {
                name: "Sarny"
            }
        ]
    },
    {
        name: "Sumy region",
        cities: [
            {
                name: "Akhtyrka"
            },
            {
                name: "Belopolje"
            },
            {
                name: "Weed"
            },
            {
                name: "Glukhov"
            },
            {
                name: "Krolevets"
            },
            {
                name: "Konotop"
            },
            {
                name: "Swan"
            },
            {
                name: "Putyvl"
            },
            {
                name: "Romny"
            },
            {
                name: "Middle-Buddha"
            },
            {
                name: "Amounts"
            },
            {
                name: "Trostianets"
            },
            {
                name: "Shostka"
            }
        ]
    },
    {
        name: "Ternopil region",
        cities: [
            {
                name: "Berezhany"
            },
            {
                name: "Borshchev"
            },
            {
                name: "Buchach"
            },
            {
                name: "Zaleschyki"
            },
            {
                name: "Zbarazh"
            },
            {
                name: "Fee"
            },
            {
                name: "Kremenets"
            },
            {
                name: "Lanovtsi"
            },
            {
                name: "Convent"
            },
            {
                name: "Podvolochisk"
            },
            {
                name: "Podgaitsy"
            },
            {
                name: "Pochaev"
            },
            {
                name: "Skalat"
            },
            {
                name: "Ternopil"
            },
            {
                name: "Terebovlja"
            },
            {
                name: "Chortkov"
            },
            {
                name: "Shumsk"
            }
        ]
    },
    {
        name: "Kharkov region",
        cities: [
            {
                name: "Balaklea"
            },
            {
                name: "Barvenkovo"
            },
            {
                name: "Bohodukhov"
            },
            {
                name: "Valky"
            },
            {
                name: "Great Burluk"
            },
            {
                name: "Volchansk"
            },
            {
                name: "Twitches"
            },
            {
                name: "Zmyev"
            },
            {
                name: "Raisin"
            },
            {
                name: "Krasnograd"
            },
            {
                name: "Kupyansk"
            },
            {
                name: "Vine"
            },
            {
                name: "Lyubotyn"
            },
            {
                name: "Merefa"
            },
            {
                name: "Pervomaisky"
            },
            {
                name: "Kharkov"
            },
            {
                name: "Chuguev"
            }
        ]
    },
    {
        name: "Kherson Region",
        cities: [
            {
                name: "Berislav"
            },
            {
                name: "Henychesk"
            },
            {
                name: "Naked Pier"
            },
            {
                name: "Kakhovka"
            },
            {
                name: "New Kakhovka"
            },
            {
                name: "Skadovsk"
            },
            {
                name: "Tavriysk"
            },
            {
                name: "Kherson"
            },
            {
                name: "Tsyurupinsk"
            }
        ]
    },
    {
        name: "Khmelnytska region",
        cities: [
            {
                name: "Volochysk"
            },
            {
                name: "Town"
            },
            {
                name: "Derazhnya"
            },
            {
                name: "Dunaevtsi"
            },
            {
                name: "Izyaslav"
            },
            {
                name: "Kamenets-Podolsky"
            },
            {
                name: "Krasylov"
            },
            {
                name: "Neteshyn"
            },
            {
                name: "Polonnoe"
            },
            {
                name: "Slavuta"
            },
            {
                name: "Starokonstantinov"
            },
            {
                name: "Khmelnytskyi"
            },
            {
                name: "Shepetovka"
            }
        ]
    },
    {
        name: "Cherkasy Region",
        cities: [
            {
                name: "Vatutino"
            },
            {
                name: "Horodische"
            },
            {
                name: "Zhashkov"
            },
            {
                name: "Zvenigorodka"
            },
            {
                name: "Zolotonosha"
            },
            {
                name: "Kamenka"
            },
            {
                name: "Kanev"
            },
            {
                name: "Korsun-Shevchenkovsky"
            },
            {
                name: "Monastery"
            },
            {
                name: "Courageous"
            },
            {
                name: "Talnoye"
            },
            {
                name: "Uman"
            },
            {
                name: "Chrystynovka"
            },
            {
                name: "Cherkassy"
            },
            {
                name: "Chigyrin"
            },
            {
                name: "Spola"
            }
        ]
    },
    {
        name: "Chernigovskaya region",
        cities: [
            {
                name: "Bahmach"
            },
            {
                name: "Bobrovitsa"
            },
            {
                name: "Borzna"
            },
            {
                name: "Horodna"
            },
            {
                name: "Desna"
            },
            {
                name: "Ichnia"
            },
            {
                name: "Kurikovka"
            },
            {
                name: "Mena"
            },
            {
                name: "Nezhin"
            },
            {
                name: "Novgorod-Seversky"
            },
            {
                name: "Handkerchief"
            },
            {
                name: "Pryluky"
            },
            {
                name: "Sednev"
            },
            {
                name: "Semenovka"
            },
            {
                name: "Chernygov"
            },
            {
                name: "Schors"
            }
        ]
    },
    {
        name: "Chernovitskaya region",
        cities: [
            {
                name: "Vashkovtsi"
            },
            {
                name: "Vyzhnitsa"
            },
            {
                name: "Hertz"
            },
            {
                name: "Pledged"
            },
            {
                name: "Kitsman"
            },
            {
                name: "Novodnestrovsk"
            },
            {
                name: "Novoselitsa"
            },
            {
                name: "Sokyryany"
            },
            {
                name: "Storozhynets"
            },
            {
                name: "Hotyn"
            },
            {
                name: "Chernivtsy"
            }
        ]
    }
]

export default uaCities;