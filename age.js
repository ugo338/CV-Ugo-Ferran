const dateNaissanceBrute = document.getElementById("age").getAttribute("datetime")
const fragmentsNaisssance = dateNaissanceBrute.split("-");
const dateNaissance = new Date(fragmentsNaisssance[0],fragmentsNaisssance[1]-1,fragmentsNaisssance[2]);
const now = new Date();
const age = Math.floor((now - dateNaissance)/(365*24*60*60*1000));
document.getElementById("age").innerHTML = `(${age} ans)`;
