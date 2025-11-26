const products = [
    /* =====================================================
       BOLSAS
    ===================================================== */
    {
        id: 1,
        name: "BOLSA MORIZETTI RIO",
        price: 200,
        image: "images/bolsa1.png",
        category: "Bolsas",
        description: "Expertly rendered by Carl Hansen & Søn..."
    },
    {
        id: 2,
        name: "BOLSA MORIZETTI RIO",
        price: 550,
        image: "images/bolsa2.png",
        category: "Bolsas",
        description: "Expertly rendered by Carl Hansen & Søn..."
    },
    {
        id: 3,
        name: "BOLSA MORIZETTI RIO",
        price: 290,
        image: "images/bolsa3.png",
        category: "Bolsas",
        description: "Expertly rendered by Carl Hansen & Søn..."
    },
    {
        id: 4,
        name: "BOLSA MORIZETTI RIO",
        price: 200,
        image: "images/bolsa4.png",
        category: "Bolsas",
        description: "Expertly rendered by Carl Hansen & Søn..."
    },
    {
        id: 5,
        name: "BOLSA MORIZETTI RIO",
        price: 300,
        image: "images/bolsa5.png",
        category: "Bolsas",
        description: "Expertly rendered by Carl Hansen & Søn..."
    },
    {
        id: 6,
        name: "BOLSA MORIZETTI RIO",
        price: 200,
        image: "images/bolsa6.png",
        category: "Bolsas",
        description: "Expertly rendered by Carl Hansen & Søn..."
    },
    {
        id: 7,
        name: "BOLSA MORIZETTI RIO",
        price: 200,
        image: "images/bolsa7.png",
        category: "Bolsas",
        description: "Expertly rendered by Carl Hansen & Søn..."
    },
    {
        id: 8,
        name: "BOLSA MORIZETTI RIO",
        price: 321,
        image: "images/bolsa8.png",
        category: "Bolsas",
        description: "Expertly rendered by Carl Hansen & Søn..."
    },

    {
        id: 9,
        name: "BOLSA MORIZETTI RIO",
        price: 321,
        image: "images/bolsa9.png",
        category: "bolsas",
        description: "Expertly rendered by Carl Hansen & Søn..."
    },
    {
        id: 10,
        name: "BOLSA MORIZETTI RIO",
        price: 321,
        image: "images/bolsa10.png",
        category: "bolsas",
        description: "Expertly rendered by Carl Hansen & Søn..."
    },
    {
        id: 11,
        name: "BOLSA MORIZETTI RIO",
        price: 321,
        image: "images/bolsa11.png",
        category: "Malas",
        description: "Expertly rendered by Carl Hansen & Søn..."
    },
    {
        id: 12,
        name: "BOLSA MORIZETTI RIO",
        price: 321,
        image: "images/bolsa12.png",
        category: "bolsas",
        description: "Expertly rendered by Carl Hansen & Søn..."
    },
    {
        id: 13,
        name: "BOLSA MORIZETTI RIO",
        price: 321,
        image: "images/bolsa13.png",
        category: "bolsas",
        description: "Expertly rendered by Carl Hansen & Søn..."
    },
    {
        id: 14,
        name: "BOLSA MORIZETTI RIO",
        price: 321,
        image: "images/bolsa14.png",
        category: "Malas",
        description: "Expertly rendered by Carl Hansen & Søn..."
    },
    {
        id: 15,
        name: "BOLSA MORIZETTI RIO",
        price: 321,
        image: "images/bolsa15.png",
        category: "bolsas",
        description: "Expertly rendered by Carl Hansen & Søn..."
    },
    {
        id: 16,
        name: "BOLSA MORIZETTI RIO",
        price: 321,
        image: "images/bolsa16.png",
        category: "bolsas",
        description: "Expertly rendered by Carl Hansen & Søn..."
    },
    {
        id: 17,
        name: "BOLSA MORIZETTI RIO",
        price: 321,
        image: "images/bolsa17.png",
        category: "bolsas",
        description: "Expertly rendered by Carl Hansen & Søn..."
    },
    {
        id: 18,
        name: "BOLSA MORIZETTI RIO",
        price: 321,
        image: "images/bolsa18.png",
        category: "bolsas",
        description: "Expertly rendered by Carl Hansen & Søn..."
    },
    {
        id: 19,
        name: "BOLSA MORIZETTI RIO",
        price: 321,
        image: "images/bolsa19.png",
        category: "bolsas",
        description: "Expertly rendered by Carl Hansen & Søn..."
    },
    {
        id: 20,
        name: "BOLSA MORIZETTI RIO",
        price: 321,
        image: "images/bolsa20.png",
        category: "bolsas",
        description: "Expertly rendered by Carl Hansen & Søn..."
    },
    {
        id: 21,
        name: "BOLSA MORIZETTI RIO",
        price: 321,
        image: "images/bolsa21.png",
        category: "bolsas",
        description: "Expertly rendered by Carl Hansen & Søn..."
    },
    {
        id: 22,
        name: "BOLSA MORIZETTI RIO",
        price: 321,
        image: "images/bolsa22.png",
        category: "bolsas",
        description: "Expertly rendered by Carl Hansen & Søn..."
    },
    {
        id: 23,
        name: "BOLSA MORIZETTI RIO",
        price: 321,
        image: "images/bolsa23.png",
        category: "bolsas",
        description: "Expertly rendered by Carl Hansen & Søn..."
    },
    {
        id: 24,
        name: "BOLSA MORIZETTI RIO",
        price: 321,
        image: "images/bolsa24.png",
        category: "bolsas",
        description: "Expertly rendered by Carl Hansen & Søn..."
    },
    {
        id: 25,
        name: "BOLSA MORIZETTI RIO",
        price: 321,
        image: "images/bolsa25.png",
        category: "bolsas",
        description: "Expertly rendered by Carl Hansen & Søn..."
    },

    {
        id: 26,
        name: "RELOGIO ORIENT",
        price: 321,
        image: "images/relogio1.png",
        category: "Relógios",
        description: "Expertly rendered by Carl Hansen & Søn..."
    },
    {
        id: 26,
        name: "RELOGIO ORIENT",
        price: 321,
        image: "images/relogio2.png",
        category: "Relógios",
        description: "Expertly rendered by Carl Hansen & Søn..."
    },
    {
        id: 27,
        name: "CARTEIRA MORIZETTI CLASSIC",
        price: 89.90,
        image: "images/carteira1.png",
        category: "Carteira",
        description: "Carteira elegante em material sintético premium, compacta e resistente para uso diário."
    },
    {
        id: 28,
        name: "CARTEIRA MORIZETTI EXECUTIVE",
        price: 109.90,
        image: "images/carteira2.png",
        category: "Carteira",
        description: "Design sofisticado com múltiplos compartimentos para cartões, documentos e dinheiro."
    },
    {
        id: 29,
        name: "CARTEIRA MORIZETTI SLIM",
        price: 74.90,
        image: "images/carteira3.png",
        category: "Carteira",
        description: "Modelo slim ideal para quem busca praticidade sem abrir mão do estilo."
    },
    {
        id: 30,
        name: "CARTEIRA MORIZETTI URBAN",
        price: 95.00,
        image: "images/carteira4.png",
        category: "Carteira",
        description: "Carteira moderna com acabamento refinado e excelente durabilidade."
    },
    {
        id: 31,
        name: "CARTEIRA MORIZETTI PREMIUM",
        price: 129.90,
        image: "images/carteira5.png",
        category: "Carteira",
        description: "Modelo premium com textura sofisticada e alta capacidade de armazenamento."
    },
    {
        id: 32,
        name: "FONE DE OUVIDO BLUETOOTH SOUNDPRO",
        price: 149.90,
        image: "images/fone1.png",
        category: "Fones",
        description: "Fone de ouvido bluetooth com som estéreo de alta qualidade e bateria de longa duração."
    },
    {
        id: 33,
        name: "FONE DE OUVIDO BASS BOOST",
        price: 179.90,
        image: "images/fone2.png",
        category: "Fones",
        description: "Potentes graves e isolamento acústico para uma experiência sonora imersiva."
    },
    {
        id: 34,
        name: "FONE DE OUVIDO WIRELESS COMFORT",
        price: 129.90,
        image: "images/fone3.png",
        category: "Fones",
        description: "Design ergonômico com ajuste confortável ideal para longos períodos de uso."
    },
    {
        id: 35,
        name: "FONE DE OUVIDO GAMER PRO",
        price: 199.90,
        image: "images/fone4.png",
        category: "Fones",
        description: "Fone gamer com microfone integrado e som direcional de alta precisão."
    },
    {
        id: 36,
        name: "FONE DE OUVIDO ULTRA SOUND",
        price: 99.90,
        image: "images/fone5.png",
        category: "Fones",
        description: "Modelo leve e compacto com excelente custo-benefício para o dia a dia."
    },
    {
        id: 37,
        name: "CARREGADOR PORTÁTIL POWERBANK FAST 10000mAh",
        price: 129.90,
        image: "images/carregador1.png",
        category: "Carregadores",
        description: "Powerbank compacto com carregamento rápido e capacidade ideal para uso diário."
    },
    {
        id: 38,
        name: "CARREGADOR PORTÁTIL ULTRA CHARGE 20000mAh",
        price: 189.90,
        image: "images/carregador2.png",
        category: "Carregadores",
        description: "Alta capacidade para múltiplas recargas com proteção contra sobrecarga."
    },
    {
        id: 39,
        name: "CARREGADOR PORTÁTIL SLIM POWER",
        price: 99.90,
        image: "images/carregador3.png",
        category: "Carregadores",
        description: "Design fino e leve perfeito para levar no bolso ou mochila."
    },
    {
        id: 40,
        name: "CARREGADOR PORTÁTIL TURBO PRO",
        price: 159.90,
        image: "images/carregador4.png",
        category: "Carregadores",
        description: "Tecnologia turbo para carregamento mais rápido e eficiente."
    },
    {
        id: 41,
        name: "GARRAFA TÉRMICA HYDRO STEEL 500ML",
        price: 59.90,
        image: "images/garrafa1.png",
        category: "Garrafas",
        description: "Garrafa térmica em aço inox que mantém líquidos gelados ou quentes por horas."
    },
    {
        id: 42,
        name: "GARRAFA ESPORTIVA FITNESS PRO 750ML",
        price: 49.90,
        image: "images/garrafa2.png",
        category: "Garrafas",
        description: "Ideal para treinos e atividades ao ar livre, com tampa antifugas."
    },
    {
        id: 43,
        name: "GARRAFA TÉRMICA URBAN STYLE 600ML",
        price: 69.90,
        image: "images/garrafa3.png",
        category: "Garrafas",
        description: "Design moderno com excelente vedação e acabamento premium."
    },
    {
        id: 44,
        name: "GARRAFA SQUEEZE ACTIVE LIFE 700ML",
        price: 39.90,
        image: "images/garrafa4.png",
        category: "Garrafas",
        description: "Leve e prática, perfeita para academia e uso diário."
    },
    {
        id: 45,
        name: "GARRAFA PREMIUM THERMO PLUS 1L",
        price: 89.90,
        image: "images/garrafa5.png",
        category: "Garrafas",
        description: "Alta capacidade com isolamento térmico avançado e resistência superior."
    },
    {
        id: 46,
        name: "BOLSA TÉRMICA INOX THERMO PRIME 500ML",
        price: 64.90,
        image: "images/termica1.png",
        category: "Bolsas",
        description: "Bolsa térmica compacta com revestimento interno isolante, ideal para levar lanches e bebidas."
    },
    {
        id: 47,
        name: "BOLSA TÉRMICA ADVENTURE 750ML",
        price: 79.90,
        image: "images/termica2.png",
        category: "Bolsas",
        description: "Bolsa térmica resistente para viagens e trilhas, mantém a temperatura por várias horas."
    },
    {
        id: 48,
        name: "BOLSA TÉRMICA MINIMAL BLACK 600ML",
        price: 69.90,
        image: "images/termica3.png",
        category: "Bolsas",
        description: "Design minimalista com alça ajustável e vedação eficiente para transporte diário."
    },
    {
        id: 49,
        name: "BOLSA TÉRMICA SPORT COOL 700ML",
        price: 74.90,
        image: "images/termica 4.png",
        category: "Bolsas",
        description: "Modelo esportivo com fácil limpeza e compartimento reforçado para garrafas e alimentos."
    },
    {
        id: 50,
        name: "BOLSA TÉRMICA PREMIUM HEAT 1L",
        price: 99.90,
        image: "images/termica5.png",
        category: "Bolsas",
        description: "Bolsa térmica de alta capacidade com isolamento avançado e acabamento premium."
    },
    {
        id: 51,
        name: "RELÓGIO ORIENT CLASSIC CHRONO",
        price: 499.90,
        image: "images/relogio1.png",
        category: "Relógios",
        description: "Relógio Orient clássico com design sofisticado e acabamento em aço inox."
    },
    {
        id: 52,
        name: "RELÓGIO ORIENT EXECUTIVE GOLD",
        price: 549.90,
        image: "images/relogio2.png",
        category: "Relógios",
        description: "Modelo elegante com detalhes dourados e visual premium para ocasiões formais."
    },
    {
        id: 53,
        name: "RELÓGIO ORIENT SPORT ANALOG",
        price: 459.90,
        image: "images/relogio3.png",
        category: "Relógios",
        description: "Visual esportivo com alta resistência e mostrador de fácil leitura."
    },
    {
        id: 54,
        name: "RELÓGIO ORIENT AUTOMÁTICO PREMIUM",
        price: 799.90,
        image: "images/relogio4.png",
        category: "Relógios",
        description: "Modelo automático com mecanismo de alta precisão e acabamento refinado."
    },
    {
        id: 55,
        name: "RELÓGIO ORIENT URBAN BLACK",
        price: 429.90,
        image: "images/relogio5.png",
        category: "Relógios",
        description: "Design moderno com pulseira confortável e estilo urbano sofisticado."
    },
    {
        id: 56,
        name: "RELÓGIO ORIENT SILVER EDITION",
        price: 479.90,
        image: "images/relogio6.png",
        category: "Relógios",
        description: "Acabamento prata com visual minimalista e elegante."
    },
    {
        id: 57,
        name: "RELÓGIO ORIENT CHRONOGRAPH PRO",
        price: 699.90,
        image: "images/relogio7.png",
        category: "Relógios",
        description: "Cronógrafo funcional ideal para quem busca estilo e precisão."
    },
    {
        id: 58,
        name: "RELÓGIO ORIENT BUSINESS STYLE",
        price: 519.90,
        image: "images/relogio8.png",
        category: "Relógios",
        description: "Modelo discreto e elegante perfeito para o ambiente corporativo."
    },
    {
        id: 59,
        name: "RELÓGIO ORIENT SPORT RESIST",
        price: 559.90,
        image: "images/relogio9.png",
        category: "Relógios",
        description: "Alta resistência com design robusto e acabamento premium."
    },
    {
        id: 60,
        name: "RELÓGIO ORIENT LUXURY GOLD",
        price: 899.90,
        image: "images/relogio10.png",
        category: "Relógios",
        description: "Modelo luxuoso com detalhes sofisticados e pulseira em metal dourado."
    },
    {
        id: 61,
        name: "RELÓGIO ORIENT MODERN SLIM",
        price: 389.90,
        image: "images/relogio11.png",
        category: "Relógios",
        description: "Perfil slim com visual moderno e confortável para uso diário."
    },
    {
        id: 62,
        name: "RELÓGIO ORIENT VINTAGE EDITION",
        price: 629.90,
        image: "images/relogio12.png",
        category: "Relógios",
        description: "Estilo retrô com acabamento clássico e mostrador refinado."
    },
    {
        id: 63,
        name: "RELÓGIO ORIENT ACTIVE PRO",
        price: 579.90,
        image: "images/relogio13.png",
        category: "Relógios",
        description: "Ideal para quem busca performance e estilo esportivo."
    },
    {
        id: 64,
        name: "RELÓGIO ORIENT CARBON EDITION",
        price: 749.90,
        image: "images/relogio14.png",
        category: "Relógios",
        description: "Design moderno com acabamento inspirado em fibra de carbono."
    },
    {
        id: 65,
        name: "RELÓGIO ORIENT SIGNATURE",
        price: 999.90,
        image: "images/relogio15.png",
        category: "Relógios",
        description: "Modelo premium da linha Orient com visual exclusivo e sofisticado."
    },
    {
        id: 66,
        name: "ESTOJO INFANTIL",
        price: 39.90,
        image: "images/estojo1.png",
        category: "Estojo",
        description: "Estojo infantil prático e resistente, ideal para organizar material escolar."
    },

];

export default products;
