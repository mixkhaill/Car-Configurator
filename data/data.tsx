export const data = {
  models: {
    categoryName: "Model",
    Fields: [
      {
        name: "Bryk DX",
        price: 160000,
        img: {
          src: "https://armiya.az/photos/2020/09/1599832047.jpg",
          alt: "Bryk DX",
        },
        engines: {
          categoryName: "Silnik",
          Fields: [
            { type: "Benzynowy", power: "1.8 130KM", price: "standard" },
            { type: "Diesel", power: "2.0 150KM", price: 11000 },
            { type: "Elektryczny", power: "180KM", price: 30000 },
          ],
        },
        versions: {
          categoryName: "Wersja",
          Fields: [
            {
              name: "Standard",
              options: ["Felgi 18 cali", "Klimatyzacja"],
              price: "standard",
            },
            {
              name: "Lux",
              options: [
                "Klimatyzacja dwustrefowa",
                "Podgrzewane fotele",
                "System nawigacji",
              ],
              price: 15000,
            },
            {
              name: "Premium",
              options: [
                "Kamera cofania",
                "System audio Bose",
                "Czujniki parkowania",
                "Bluetooth",
              ],
              price: 18000,
            },
            {
              name: "SuperPremium",
              options: [
                "Szyberdach panoramiczny",
                "System bezkluczykowy",
                "Ogrzewane lusterka",
                "Asystent pasa ruchu",
                "Klimatyzacja czterostrefowa",
              ],
              price: 21000,
            },
          ],
        },
        colors: {
          categoryName: "Kolory",
          Fields: [
            {
              name: "Czerwony",
              value: "#FF0000",
            },
            {
              name: "Czarny",
              value: "#333333",
            },
            {
              name: "Biały",
              value: "#e5e5e5",
            },
            {
              name: "Szary",
              value: "#808080",
            },
            {
              name: "Burgundzki",
              value: "#800020",
            },
          ],
        },
        upholsteries: {
          categoryName: "Tapicerka",
          Fields: [
            {
              name: "Alcantara",
              price: "standard",
            },
            {
              name: "Materiał",
              price: "standard",
            },
            {
              name: "Kombinacja skóry i materiału",
              price: 1300,
            },
            {
              name: "Eco-skóra",
              price: 1200,
            },
            {
              name: "Skóra",
              price: 5000,
            },
          ],
        },
        additionalOptions: {
          categoryName: "Opcje",
          Fields: [
            {
              name: "Pakiet Premium",
              options: [
                "System audio Bose",
                "Kamera 360 stopni",
                "Ogrzewane siedzenia tył",
              ],
              standards: ["Premium", "SuperPremium"],
              price: 8000,
            },
            {
              name: "Szyberdach",
              options: ["Elektryczny szyberdach", "Roleta przeciwsłoneczna"],
              standards: ["Lux", "Premium", "SuperPremium"],
              price: 3000,
            },
          ],
        },
      },
      {
        name: "Bryk DA",
        price: 167000,
        img: {
          src: "https://mtwzabrze.pl/wp-content/uploads/2020/07/BWP-1_camo.png",
          alt: "Bryk DA",
        },
        engines: {
          categoryName: "Silnik",
          Fields: [
            { type: "Benzynowy", power: "1.5 110KM", price: "standard" },
            { type: "Diesel", power: "1.6 110KM", price: "standard" },
            { type: "Elektryczny", power: "150KM", price: 20000 },
          ],
        },
        versions: {
          categoryName: "Wersja",
          Fields: [
            {
              name: "Standard",
              options: ["Felgi 18 cali", "Klimatyzacja"],
              price: "standard",
            },
            {
              name: "Lux",
              options: [
                "Klimatyzacja dwustrefowa",
                "Podgrzewane fotele",
                "System nawigacji",
              ],
              price: 15000,
            },
            {
              name: "Premium",
              options: [
                "Kamera cofania",
                "System audio Bose",
                "Czujniki parkowania",
                "Bluetooth",
              ],
              price: 18000,
            },
            {
              name: "SuperPremium",
              options: [
                "Szyberdach panoramiczny",
                "System bezkluczykowy",
                "Ogrzewane lusterka",
                "Asystent pasa ruchu",
                "Klimatyzacja czterostrefowa",
              ],
              price: 21000,
            },
          ],
        },
        colors: {
          categoryName: "Kolory",
          Fields: [
            {
              name: "Czerwony",
              value: "#FF0000",
            },
            {
              name: "Czarny",
              value: "#333333",
            },
            {
              name: "Biały",
              value: "#e5e5e5",
            },
            {
              name: "Szary",
              value: "#808080",
            },
            {
              name: "Burgundzki",
              value: "#800020",
            },
          ],
        },
        upholsteries: {
          categoryName: "Tapicerka",
          Fields: [
            {
              name: "Alcantara",
              price: "standard",
            },
            {
              name: "Materiał",
              price: "standard",
            },
            {
              name: "Kombinacja skóry i materiału",
              price: 1500,
            },
            {
              name: "Eco-skóra",
              price: 1000,
            },
            {
              name: "Skóra",
              price: 5000,
            },
          ],
        },
        additionalOptions: {
          categoryName: "Opcje",
          Fields: [
            {
              name: "Pakiet Premium",
              options: [
                "System audio Bose",
                "Kamera 360 stopni",
                "Ogrzewane siedzenia tył",
              ],
              standards: ["Premium", "SuperPremium"],
              price: 8000,
            },
            {
              name: "Szyberdach",
              options: ["Elektryczny szyberdach", "Roleta przeciwsłoneczna"],
              standards: ["Lux", "Premium", "SuperPremium"],
              price: 3000,
            },
          ],
        },
      },
      {
        name: "Bryk DZ",
        price: 174000,
        img: {
          src: "https://armiya.az/photos/2020/09/1599832047.jpg",
          alt: "Bryk DA",
        },
        engines: {
          categoryName: "Silnik",
          Fields: [
            { type: "Benzynowy", power: "1.6 120KM", price: "standard" },
            { type: "Diesel", power: "1.8 130KM", price: 25000 },
            { type: "Elektryczny", power: "170KM", price: "standard" },
          ],
        },
        versions: {
          categoryName: "Wersja",
          Fields: [
            {
              name: "Standard",
              options: ["Felgi 18 cali", "Klimatyzacja"],
              price: "standard",
            },
            {
              name: "Lux",
              options: [
                "Klimatyzacja dwustrefowa",
                "Podgrzewane fotele",
                "System nawigacji",
              ],
              price: 15000,
            },
            {
              name: "Premium",
              options: [
                "Kamera cofania",
                "System audio Bose",
                "Czujniki parkowania",
                "Bluetooth",
              ],
              price: 18000,
            },
            {
              name: "SuperPremium",
              options: [
                "Szyberdach panoramiczny",
                "System bezkluczykowy",
                "Ogrzewane lusterka",
                "Asystent pasa ruchu",
                "Klimatyzacja czterostrefowa",
              ],
              price: 21000,
            },
          ],
        },
        colors: {
          categoryName: "Kolory",
          Fields: [
            {
              name: "Czerwony",
              value: "#FF0000",
            },
            {
              name: "Czarny",
              value: "#333333",
            },
            {
              name: "Biały",
              value: "#e5e5e5",
            },
            {
              name: "Szary",
              value: "#808080",
            },
            {
              name: "Burgundzki",
              value: "#800020",
            },
          ],
        },
        upholsteries: {
          categoryName: "Tapicerka",
          Fields: [
            {
              name: "Alcantara",
              price: "standard",
            },
            {
              name: "Materiał",
              price: "standard",
            },
            {
              name: "Kombinacja skóry i materiału",
              price: 1500,
            },
            {
              name: "Eco-skóra",
              price: 1000,
            },
            {
              name: "Skóra",
              price: 5000,
            },
          ],
        },
        additionalOptions: {
          categoryName: "Opcje",
          Fields: [
            {
              name: "Pakiet Premium",
              options: [
                "System audio Bose",
                "Kamera 360 stopni",
                "Ogrzewane siedzenia tył",
              ],
              standards: ["Premium", "SuperPremium"],
              price: 8000,
            },
            {
              name: "Szyberdach",
              options: ["Elektryczny szyberdach", "Roleta przeciwsłoneczna"],
              standards: ["Lux", "Premium", "SuperPremium"],
              price: 3000,
            },
          ],
        },
      },
    ],
  },
};
