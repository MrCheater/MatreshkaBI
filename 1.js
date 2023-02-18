const fetch = require('node-fetch')
const path = require('path')
const fs = require('fs')

const thread = async (startPage, endPage) => {
  for(let page = startPage; page<endPage; page++) {
    for(;;) {
      try {

    const response = await fetch(`https://dobro.ru/api/v2/volunteers?page=${page}&limit=100000000000`, {
      headers: {
        accept: 'application/ld+json'
      }
    })

    const fullData  =( await response.json())
    const data =fullData["hydra:member"]


    console.log(
      fullData['hydra:view']['hydra:last'] ,
      '/',
      fullData['hydra:view']['hydra:next']
    )



    if(data.length === 0) { break; }
    for(const row of data) {
      fs.appendFileSync('volunteers.txt', JSON.stringify(row) + ",")
    }
      } catch (error) {
        console.error(error)
      }
    }
  }
}

const main = async() => {
  const arr = []
  let page = 1
  try{
    fs.unlinkSync('volunteers.txt')
  } catch {}
    fs.writeFileSync('volunteers.txt', '[\n')

  const promises = []
  for(let startPage = 1, endPage = 101; startPage < 100; startPage+=100, endPage+=100) {
    promises.push(thread(startPage, endPage))
  }
  await Promise.all(promises)

  fs.appendFileSync('volunteers.txt', ']')
}

main()

