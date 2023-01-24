//aysnc wait

    // console.log('preson1: shows the ticket');
    // console.log('preson2: shows the ticket');
    
    // const wifebringticket= new Promise ((resolve,reject)=>{
    //     setTimeout(() => {
    //         resolve('Ticket');
    //     }, 3000);
    // });

    // const getpopcorn= wifebringticket.then((t)=>{
    //     console.log('wife: i have the tickets');
    //     console.log('husband: we should go in');
    //     console.log('wife: no i am hungry');
    //     return new Promise((resolve,reject)=>{
    //         resolve(`${t} popcorn`);
    //     })
    // })
    // const getbutter =getpopcorn.then((t)=>{
    //     console.log('husband: i have got popcorn');
    //     console.log('husband: we should go in');
    //     console.log('wife: no i need butter');
    //     return new Promise((resolve,reject)=>{
    //         resolve(`${t} butter`);
    //     })
    // })
    // const getcolddrink=getbutter.then((t)=>{
    //     console.log('husband: i have got butter');
    //     console.log('husband: we should go in');
    //     console.log('wife: no i need cold drink');
    //     return new Promise((resolve,reject)=>{
    //         resolve(`${t} colddrink`);
    //     })
    // })

    // getcolddrink.then((t)=>{
    //     console.log(t);
    // })


    // console.log('preson4: shows the ticket');
    // console.log('preson5: shows the ticket');


console.log('preson1: shows the ticket');
console.log('preson2: shows the ticket');
const premovie=async()=>{
    const wifebringticket= new Promise ((resolve,reject)=>{
        setTimeout(() => {
            resolve('Ticket');
        }, 3000);
    });
    const getpopcorn=new Promise((resolve,reject)=>resolve('popcorn'));

    const getbutter=new Promise ((resolve,reject)=>resolve('butter'));

    const getcolddrink =new Promise((resolve,reject)=>resolve('colddrink'));

  let ticket=await wifebringticket;

  let [popcorn,butter,colddrink]=await Promise.all([getpopcorn,getbutter,getcolddrink])
  console.log(`${popcorn},${butter},${colddrink}`);

//      console.log(`wife: i have the ${ticket}`);
//      console.log('husband: we should go in');
//      console.log('wife: no i am hungry');
//   let popcorn=await getpopcorn;
//       console.log(`husband: i have got${popcorn}`);
//       console.log('husband: we should go in');
//       console.log('wife: no i need butter');
//  let butter=await getbutter;
//       console.log(`husband: i have got ${butter}`);
//      console.log('husband: we should go in');
//      console.log('wife: no i need cold drink');
//   let colddrink=await getcolddrink;   
//    console.log(`husband: i have got ${colddrink}`);
//    console.log('husband: anything else');
//    console.log('wife: lets go inside we are getting late');
//    console.log('husband: thank you')



  return ticket;
};
premovie().then((m)=>{
    console.log(`person 3: show ${m}`);
})



console.log('preson4: shows the ticket');
console.log('preson5: shows the ticket');