type Category = {
    title: string;
    materials: string[];
    howto?: string;
};

export type Material = {
    material: string;
    category: string;
};

// source: https://www.reaquila.com/comoreciclar
const categories: Category[] = [
    {
        title: 'Vidrio',
        materials: ['Botellas y frascos'],
    },
    {
        title: 'Papel Blanco',
        materials: [
            'Hojas blancas (usadas y sin usar, con o sin tinta negra)',
            'Hojas de cuaderno y cartulina blanca',
            'Fotocopias',
        ],
    },
    {
        title: 'Papel Color',
        materials: [
            'Folletos, diarios, revistas, facturas, papeles con tinta color, cartulina de color',
        ],
    },
    {
        title: 'Cartón',
        materials: [
            'Cajas en general (packaging de delivery de comida sin grasa ni aceite)',
            'Maple de huevos',
            'Bandejas de comida',
            'Cilindro de papel higiénico y de cocina',
            'Cartón corrugado',
        ],
    },
    {
        title: 'Tetra',
        materials: ['Envases de vinos, leches, salsas, conservas, jugos'],
    },
    {
        title: 'Otros Metales',
        materials: [
            'Latas de conserva como arvejas, choclo, atún, etc.',
            'Tapas de frascos',
        ],
    },
    {
        title: 'Aluminio',
        materials: [
            'Latas de refrescos como gaseosas, cervezas y jugos',
            'Desodorantes corporales, papel aluminio',
            'Laminas para cerrar yogures',
            'Bandejas de comida',
        ],
    },
    {
        title: 'PET (1)',
        materials: [
            'Botellas de bebidas como gaseosas, jugos y agua, aceite, vinagre, bandejas de torta y viandas, y todos aquellos envases con el símbolo 1',
        ],
    },
    {
        title: 'PEAD o HDPE (2)',
        materials: [
            'Envases de shampoo, crema de enjuague, productos de limpieza, bidones de lavandina y todos aquellos envases con el símbolo 2',
            'Tapitas de bebidas con el símbolo 2',
        ],
    },
    {
        title: 'PEBD o LDPE (4)',
        materials: [
            'Bolsas de supermercado y consorcio',
            'Strech o papel film (limpio, sin restos de comida)',
            'Bolsas de alimentos (azúcar, sal y cualquier bolsa que se estire antes de romperse), y todos aquellos envases con el símbolo 4',
        ],
    },
    {
        title: 'PP (5)',
        materials: [
            'PP Rígido: Contenedores plásticos, bowls, tuppers, bazar en general, vasos y platos no descartable, y todos aquellos envases con el símbolo 5',
            'PP Flexible: Paquetes de snacks (papas fritas, chizitos, etc) y envases de fideos, arroz, galletitas, golosinas',
        ],
    },
    {
        title: 'PS (6)',
        materials: [
            'Vajilla descartable, potes de yogurt, cajas de CDs, tapas de vasos descartables, y todos aquellos envases con el símbolo 6',
            'Telgopor: Bandejitas de supermercado, vasos descartables, potes térmicos y embalajes de electrodomésticos',
        ],
    },
    {
        title: 'Hojalata',
        materials: [
            'Envases metálicos de vegetales y frutas, pates, aerosoles de limpieza o desinfección',
        ],
    },
    {
        title: 'Colillas de Cigarrillos',
        materials: ['Colillas de Cigarrillos'],
        howto: 'Separar un envase, como por ejemplo una botella, donde unicamente tires ahí las colillas de cigarrillos. Juntalos todos ahí, secos y una vez que llenes la botella entera podes llevarla al punto',
    },
];

export const getCategories = () => {
    return categories;
};

export const getMaterials = () => {
    const materialsArray: Material[] = [];

    categories.forEach(({ materials, title }) => {
        materials.forEach((material) => {
            materialsArray.push({
                material,
                category: title,
            });
        });
    });

    return materialsArray;
};
