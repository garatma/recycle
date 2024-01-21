type Category = {
    title: string;
    materials: string[];
};

export type Material = {
    material: string;
    category: string;
};

const categories: Category[] = [
    {
        title: 'Vidrio',
        materials: ['Botellas', 'Frascos'],
    },
    {
        title: 'Papel blanco',
        materials: [
            'Hojas blancas (usadas y sin usar, con o sin tinta negra)',
            'Hojas de cuaderno y cartulina blanca',
            'Fotocopias',
        ],
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
