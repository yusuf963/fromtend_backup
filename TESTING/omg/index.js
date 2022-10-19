
//https://gist.githubusercontent.com/mwz/c072cba40e88da935bf6eeb1c1d8b72e/raw/90f8bf8fc827c50a32ce14c35401d813e648c30d/lorem%2520ipsum
const text = "lorem ipsum dolor sit amet consectetur lorem ipsum et mihi quoniam et adipiscing elit.sed quoniam et advesperascit et mihi ad villam revertendum est nunc quidem hactenus ex rebus enim timiditas non ex vocabulis nascitur.nummus in croesi divitiis obscuratur pars est tamen divitiarum.nam quibus rebus efficiuntur voluptates eae non sunt in potestate sapientis.hoc mihi cum tuo fratre convenit.qui ita affectus beatum esse numquam probabis duo reges constructio interrete.de hominibus dici non necesse est.eam si varietatem diceres intellegerem ut etiam non dicente te intellego parvi enim primo ortu sic iacent tamquam omnino sine animo sint.ea possunt paria non esse.quamquam tu hanc copiosiorem etiam soles dicere.de quibus cupio scire quid sentias.universa enim illorum ratione cum tota vestra confligendum puto.ut nemo dubitet eorum omnia officia quo spectare quid sequi quid fugere debeant nunc vero a primo quidem mirabiliter occulta natura est nec perspici nec cognosci potest.videmusne ut pueri ne verberibus quidem a contemplandis rebus perquirendisque deterreantur sunt enim prima elementa naturae quibus auctis virtutis quasi germen efficitur.nam ut sint illa vendibiliora haec uberiora certe sunt.cur deinde metrodori liberos commendas.mihi inquam qui te id ipsum rogavi nam adhuc meo fortasse vitio quid ego quaeram non perspicis.quibus ego vehementer assentior.cur iustitia laudatur mihi enim satis est ipsis non satis.quid est enim aliud esse versutum nobis heracleotes ille dionysius flagitiose descivisse videtur a stoicis propter oculorum dolorem.diodorus eius auditor adiungit ad honestatem vacuitatem doloris.nos quidem virtutes sic natae sumus ut tibi serviremus aliud negotii nihil habemus."
//- How many words are there in the text?
//correct  = 260

const numberOfWords = (str) => {
  const words = str.split(/[" ".]/g)
  words.pop(-1)
  return words.length
}
// - How many sentences are there in the text?
const numberOfSentence = (str) => {
  const words = str.split(".")
  words.pop(-1)
  return words.length
}
// console.log(numberOfSentence(text))

//What is the length of the longest word?
// let word = "";
// for (let i = 0; i < arr.length; i++) {
//   if (word.length < arr[i].length) {
//     word = arr[i];
//   }
// }
// return word;
// }


const theLongestWord = (str) => {
  let word = "";
  const words = str.split(/[" ".]/g)
  for (let i = 0; i < words.length; i++) {
    if (word.length < words[i].length) {
      word = words[i];
    }
  }
  return word.length
}

//- Which six words occur the most in the text?

const topSixAppearance = (str) => {
  const arr =[
    {
      id: index,
      count : '',
      keyword : words[index]
    }
    
  ]
  const words = str.split(/[" ".]/g)
  for (let i = 0; i < words.length; i++) {
    let count =  `${[i]}`
    console.log(words[i])
  }
}
topSixAppearance(text)