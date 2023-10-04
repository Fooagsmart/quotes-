//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote:"Stop apologizing! It’s ok if your ideas are different, your goals are big – don’t be afraid of what others would say. You are skilled, capable, and talented – you deserve to be a leader, and you are enough. Leaning in can be uncomfortable, so don’t be afraid to own your seat, lean back, and kick your feet up.",
    person: 'Joy Fitzgerald'
}, {
    quote:"I find that the very things that I get criticized for, which is usually being different and just doing my own thing and just being original, is the very thing that’s making me successful.",
    person:'– Shania Twain'
},
{
    quote:"Sometimes, being different feels a lot like being alone. But with that being said, being true to that and being true to my standards and my way of doing things in my art and my music, everything that has made me feel very different…in the end, it has made me the happiest.",
    person:'– Lindsey Stirling'
},
{
    quote:"Normal is not something to aspire to, it’s something to get away from.",
    person:'– Jodie Foster'
},
{
    quote:"In order to be irreplaceable, one must always be different.",
    person:'– Coco Chanel'
},
{
    quote:"Fitting in allows you to blend in with everyone else, but being different allows you to be yourself, to be unique, and to be more creative.",
    person:' Sonya Parker'
},
{
    quote:"The person who follows the crowd will usually go no further than the crowd. The person who walks alone is likely to find himself in places no one has ever seen before.",
    person:'Albert Einstein'
},
{
    quote:"Two roads diverged in a wood, and I – I took the one less traveled by, and that has made all the difference.",
    person:' Robert Frost.'
},
{
    quote:"I want to say when I was little, like Maleficent, I was told I was different. And I felt out of place and too loud, too full of fire, never good at sitting still, never good at fitting in.  And then one day I realized something – something I hope you all realize. Different is good. When someone tells you that you are different, smile, and hold your head up and be proud.",
    person:' Angelina Jolie'
},
{
    quote:"If a man does not keep pace with his companions, perhaps it is because he hears a different drummer. Let him step to the music which he hears however measured or far away.",
    person:'Henry David'
},
{
    quote:"Whatever you do, be different – that was the advice my mother gave me, and I can’t think of better advice for an entrepreneur. If you’re different, you will stand out",
    person:'Anita Roddick'
},
{
    quote:"Take care not to listen to anyone who tells you what you can and can’t be in life.",
    person:'Meg Medina'
},
{
    quote:"You are a marvel. You are unique. In all the years that have passed, there has never been another child like you. Your legs, your arms, your clever fingers, the way you move. You may become a Shakespeare, a Michelangelo, a Beethoven. You have the capacity for anything.",
    person:'Henry David Thoreau'
},
{
    quote:"I thought not fitting in was something I had to fix. Now I see it as my superpower.",
    person:' Maxime Lagacé'
},
{
    quote:"Always refuse to be like the others! The more you become similar to the others the more you will be useless because there are already plenty of the others!",
    person:' Mehmet Murat Ildan'
},
{
    quote:"Creative people have it hard. There is always something trapped in their noggins yearning to escape like a caged animal, both too free and wild to contain. Little does the world know it will often scrape the inner walls of the mind until it gets what it wants.",
    person:'H.S Crow'
},
{
    quote:"Being different and thinking differently make a person unforgettable. History does not remember the forgettable. It honors the unique minority the majority cannot forget.",
    person:'Suzy Kassem'
},
{
    quote:" Do to others as you would have them do to you.",
    person:'Luke 6:31'
},
{
    quote:"So I say to you: Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.",
    person:'Luke 11:9'
},
{
    quote:"Then Jesus declared, “I am the bread of life. Whoever comes to me will never go hungry, and whoever believes in me will never be thirsty.",
    person:'John 6:35'
},
{
    quote:"I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.",
    person:'John 15:5'
},
{
    quote:"Do not judge, or you too will be judged.",
    person:'Matthew 7:1'
},
{
    quote:"No one can serve two masters. Either you will hate the one and love the other, or you will be devoted to the one and despise the other. You cannot serve both God and money.",
    person:'Matthew 6:24'
},
]

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
    
})