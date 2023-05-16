export const cgvs = [{
    id:1,
    grand-un:"1.Dispositions générales",
},
{
    id:2,
    grand-deux:"2.Identification du fournisseur",
},
{
    id:3,
    grand-trois:"3.Renseignements sur les produits et leur disponibilité",
},
{
    id:4,
    grand-quatre:"4.Prix",
},
{
    id:5,
    grand-cing:"5.Exécution du contrat",
},
{
    id:6,
    grand-six:"6.Mode de paiement",
},
]
export function findById(id){
    const found = cgvs.find(element => element.id == id);
    return found
}