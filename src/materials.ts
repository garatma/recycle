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
        materials: ['Botellas', 'Frascos'],
    },
    {
        title: 'Papel Blanco',
        materials: [
            'Hojas blancas usadas',
            'Hojas blancas con tinta negra',
            'Hojas blancas sin usar',
            'Hojas de cuaderno',
            'Cartulina blanca',
            'Fotocopias blanco y negro',
        ],
    },
    {
        title: 'Papel Color',
        materials: [
            'Folletos',
            'Diarios',
            'Revistas',
            'Facturas',
            'Papeles con tinta color',
            'Cartulina de color',
        ],
    },
    {
        title: 'Cartón',
        materials: [
            'Cajas en general',
            'Cajas de delivery de comida sin grasa ni aceite',
            'Maple de huevos',
            'Bandejas de comida de cartón',
            'Cilindro de papel higiénico',
            'Cilindro de papel de cocina',
            'Cartón corrugado',
        ],
    },
    {
        title: 'Tetra',
        materials: [
            'Envases de vinos',
            'Envases de leche',
            'Envases de salsas',
            'Envases de conservas',
            'Envases de jugos',
        ],
    },
    {
        title: 'Otros Metales',
        materials: [
            'Latas de conservas',
            'Latas de arvejas',
            'Latas de choclo',
            'Latas de atún',
            'Otras latas',
            'Tapas de frascos',
        ],
    },
    {
        title: 'Aluminio',
        materials: [
            'Latas de gaseosas',
            'Latas de cervezas',
            'Latas de jugos',
            'Desodorantes corporales',
            'Papel aluminio',
            'Laminas para cerrar yogures',
            'Bandejas de comida de aluminio',
        ],
    },
    {
        title: 'PET (1)',
        materials: [
            'Botellas de gaseosa',
            'Botellas de jugo',
            'Botellas de agua',
            'Botellas de aceite',
            'Botellas de vinagre',
            'Bandejas de torta',
            'Bandejas de viandas',
            'Envases con el símbolo 1',
        ],
    },
    {
        title: 'PEAD o HDPE (2)',
        materials: [
            'Envases de shampoo',
            'Envases de crema de enjuague',
            'Envases de productos de limpieza',
            'Bidones de lavandina',
            'Envases con el símbolo 2',
            'Tapitas de bebidas con el símbolo 2',
        ],
    },
    {
        title: 'PEBD o LDPE (4)',
        materials: [
            'Bolsas de supermercado',
            'Bolsas de y consorcio',
            'Papel film limpio',
            'Bolsas de alimentos (azúcar, sal, etc.)',
            'Bolsas que se estires antes de romperse',
            'Envases con el símbolo 4',
        ],
    },
    {
        title: 'PP (5)',
        materials: [
            'PP Rígido: Contenedores plásticos',
            'PP Rígido: bowls',
            'PP Rígido: tuppers',
            'PP Rígido: bazar en general',
            'PP Rígido: vasos y platos no descartable',
            'PP Flexible: Paquetes de snacks (papas fritas, etc.)',
            'PP flexible: envases de fideos',
            'PP flexible: arroz',
            'PP flexible: galletitas',
            'PP flexible: golosinas',
            'Aquellos envases con el símbolo 5',
        ],
    },
    {
        title: 'PS (6)',
        materials: [
            'Vajilla descartable',
            'Potes de yogurt',
            'Cajas de CDs',
            'Tapas de vasos descartables',
            'Envases con el símbolo 6',
            'Telgopor: bandejitas de supermercado',
            'Telgopor: vasos descartables',
            'Telgopor: potes térmicos',
            'Telgopor: embalajes de electrodomésticos',
        ],
    },
    {
        title: 'Hojalata',
        materials: [
            'Envases metálicos de vegetales',
            'Envases metálicos de frutas',
            'Envases metálicos de pates',
            'Aerosoles de limpieza o desinfección',
        ],
    },
    {
        title: 'Cigarrillos',
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
