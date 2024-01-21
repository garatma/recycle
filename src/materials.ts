type Material = {
    title: string;
    materials: string[];
};

const data: Material[] = [
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

export const getReverseData = () => {
    return data.map(({ materials, title }) => {
        return materials.map((material) => {
            return {
                title: material,
                materials: [title],
            };
        });
    });
};

export default data;
