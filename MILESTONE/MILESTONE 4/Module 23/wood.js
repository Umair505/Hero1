function woodQuantity(chairQuantity,tableQuantity,bedQuantity)
{
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const ChairTotalWood = chairQuantity * perChairWood;
    const TableTotalWood = tableQuantity * perTableWood;
    const BedTotalWood = bedQuantity * perBedWood;
    return ChairTotalWood+BedTotalWood+TableTotalWood;
}
const totalWood = woodQuantity(30,10,5);

console.log(`Total wood needed: ${totalWood} pieces`);