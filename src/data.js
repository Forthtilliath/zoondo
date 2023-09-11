export default tribe = {
  slug: 'europa-boarix',
  edition: 'Europa',
  name: 'Boarix',
  description:
    "Cette tribu porcine à la culture primitive s'est développée dans les sombres forêts des terres basses, près des côtes du grand océan. L'habitat traditionnel des Boarix tient plus de la bauge des sangliers de l'ère prénucléaire que de la hutte rudimentaire d'usage courant chez les peuplades forestières. Partageant leur temps entre les rites shamaniques et les bains de boue, les membres de cette tribu figurent parmi les combattants les plus craints du vieux continent. Leur mauvaise humeur légendaire les rend réfractaures à toute forme d'autorité et les entraîne dans d'interminables conflits avec leur voisinage. Bien qu'elle se soit toujours montrée peu encline à l'expansionnisme, nous émettons des doutes quant à la pérénnité à long terme de cette tribu, compte tenu de son caractère guerrier et irrascible.",
  fighters: {
    cloboulon: {
      slug: 'cloboulon',
      name: 'Cloboulon',
      type: 'CHIEF',
      corners: [4, 5, '*', 2],
      power:
        'Le combat se solde par une égalité. Si tu viens de déplacer Cloboulon, tu déplaces un Grognard.',
      value: 20,
      moves: [
        [[-1, 0]],
        [[-1, 1]],
        [[0, 1]],
        [[1, 1]],
        [[1, 0]],
        [[1, -1]],
        [[0, -1]],
        [[-1, -1]],
      ],
    },
    'gold-hure': {
      slug: 'gold-hure',
      name: 'Gold-Hure',
      type: 'HERO',
      corners: [4, 4, 2, '*'],
      power:
        'Le combat se solde par une égalité. Si tu viens de déplacer Gold-Hure, tu le déplaces à nouveau.',
      resolver: goldHureResolver,
      value: 24,
      moves: [
        [[-1, 0]],
        [
          [-1, 1],
          [-2, 2],
        ],
        [
          [0, 1],
          [0, 2],
        ],
        [
          [1, 1],
          [2, 2],
        ],
        [[1, 0]],
        [[1, -1]],
        [
          [0, -1],
          [0, -2],
        ],
        [[-1, -1]],
      ],
    },
    bouclefeuille: {
      slug: 'bouclefeuille',
      name: 'Bouclefeuille',
      type: 'PRIEST',
      corners: [2, 0, 0, '*'],
      resolver: bouclefeuilleResolver,
      power:
        'Le combat se solde par une égalité. Tu déplaces Bouclefeuille dans une case libre du champ de bataille.',
      value: 2,
      moves: [[[-1, 0]], [[1, 0]]],
    },
    grognard: {
      slug: 'grognard',
      name: 'Grognard',
      type: 'ELITE',
      variants: [{ corners: [3, 4, 2, 1] }, { corners: [4, 3, 1, 2] }],
      value: 16,
      moves: [
        [[-1, 0]],
        [
          [-1, 1],
          [-2, 2],
        ],
        [[0, 1]],
        [
          [1, 1],
          [2, 2],
        ],
        [[1, 0]],
      ],
    },
    kassin: {
      slug: 'kassin',
      name: 'Kassin',
      type: 'SOLDIER',
      variants: [{ corners: [1, 2, 0, 0] }, { corners: [2, 1, 0, 0] }],
      value: 7,
      moves: [[[-1, 0]], [[0, 1]], [[1, 0]], [[0, -1]]],
    },
    sacrechene: {
      slug: 'sacrechene',
      name: 'Sacrechêne',
      type: 'EMBLEM',
      corners: [4, 2, 0, 0],
      value: 12,
      moves: [],
    },
  },
}
