const students = [
  {
    name: "Jorge",
    g1: 7,
    g2: 9
  },
  {
    name: "Maria",
    g1: 6,
    g2: 8
  },
  {
    name: "Telmo",
    g1: 4,
    g2: 6
  },
  {
    name: "Cassio",
    g1: 6,
    g2: 10
  },
]
let approval
for (let student of students) {
  approval = gradeCalc(student.g1, student.g2)
  if (approval > 6)
    alert(`A média do aluno(a) ${student.name} é ${approval}\nParabéns, ${student.name}! Você foi aprovado(a)!`)
  else
    alert(`A média do aluno(a) ${student.name} é ${approval}\nNão foi dessa vez, ${student.name}! Tente novamente!`)
}

function gradeCalc(g1, g2) {
  let result = ((g1 + g2) / 2).toFixed(1)
  return result
}