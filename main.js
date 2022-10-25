document.querySelector("button").addEventListener("click", getSign);

    function getSign() {
      // This is helping us set-up
      const zoodiac= document.querySelector("input").value
      const dates= zoodiac.split('-')
    //   year,month, day
    //   0,1,2
      const day=dates[2]
      const month=dates[1]
      // console.log("Day: ", day, "Month: ", month)
    
      /* NOTE: We are forcing the year 2000 in here and in every other Date because we don't care about it.
         We set to it 2000 because it is consistant. It can be any year. We need a consistent Year in order to compare
         the Month and Day using math, the values that we actually care about */
      // This is important because we converted the user's inputted date into a proper Date Object
      const userDate = new Date(
        /*year*/ 2000,
        /* We have to convert these from a String to a Number in order to do Math/compare. This is not possible with Strings*/
        /*monthIndex*/ (Number.parseInt(month) - 1),
        /*day*/ (Number.parseInt(day))
      )
      // console.log(userDate)
    
      //Aries March 21, April 19
      const ariesStart = new Date(2000, 2, 21)
      const ariesEnd = new Date(2000, 3, 19)
      const isAries = (userDate >= ariesStart) && (userDate <= ariesEnd) // You can save a comparison as a variable and then use that in a IF/ELSE statement
    
      //Taurus April 20, May 21
      const taurusStart = new Date(2000, 3, 20)
      const taurusEnd = new Date(2000, 4, 21)
      const isTaurus = (userDate >= taurusStart) && (userDate <= taurusEnd)
    
      //Gemini May 22, June 20
      const geminiStart = new Date(2000, 4, 22)
      const geminiEnd = new Date(2000, 5, 20)
      const isGemini = (userDate >=geminiStart) && (userDate <= geminiEnd)
      
      //Cancer June 21, July 22
      const cancerStart = new Date(2000, 5, 21)
      const cancerEnd = new Date(2000, 6, 22)
      const isCancer = (userDate >=cancerStart) && (userDate <= cancerEnd)

      //Leo July 23, August 22
      const leoStart = new Date(2000, 6, 23)
      const leoEnd = new Date(2000, 7, 22)
      const isLeo = (userDate >=leoStart) && (userDate <= leoEnd)

      //Virgo August 23, September 22
      const virgoStart = new Date(2000, 7, 23)
      const virgoEnd = new Date(2000, 8, 22)
      const isVirgo = (userDate >=virgoStart) && (userDate <= virgoEnd)

      //Libra September 23, October 22
      const libraStart = new Date(2000, 8, 23)
      const libraEnd = new Date(2000, 9, 22)
      const isLibra = (userDate >=libraStart) && (userDate <= libraEnd)

      //Scorpio October 23, November 21
      const scorpioStart = new Date(2000, 9, 23)
      const scorpioEnd = new Date(2000, 10, 21)
      const isScorpio = (userDate >=scorpioStart) && (userDate <= scorpioEnd)

      //Sagittarius November 22, December 21
      const sagittariusStart = new Date(2000, 10, 23)
      const sagittariusEnd = new Date(2000, 11, 21)
      const isSagittarius = (userDate >=sagittariusStart) && (userDate <= sagittariusEnd)

      //Capricorn December 22, January 19
      const capricornStart = new Date(2000, 11, 22)
      const capricornEnd = new Date(2000, 0, 19)
      const isCapricorn = (userDate >=capricornStart) && (userDate <= capricornEnd)

      //Aquarius January 20, February 18
      const aquariusStart = new Date(2000, 0, 20)
      const aquariusEnd = new Date(2000, 1, 18)
      const isAquarius = (userDate >=aquariusStart) && (userDate <= aquariusEnd)

      //Pisces February 19, March 20
      const piscesStart = new Date(2000, 1, 19)
      const piscesEnd = new Date(2000, 2, 20)
      const isPisces = (userDate >=piscesStart) && (userDate <= piscesEnd)

      
    
      if(isAries) {
          // Then return/display the user's horoscope
          // console.log("You're an Aries")
          document.querySelector('.answer').innerText = 'Aries'
          document.querySelector('.picture').src='Aries.webp'
      } else if(isTaurus) {
          // Then return/display the user's horoscope
          // console.log("You're a Taurus")
          document.querySelector('.answer').innerText = 'Taurus'
          document.querySelector('.picture').src='Taurus.webp'
      } else if (isGemini) {
          // Then return/display the user's horoscope
          // console.log("You're a Gemini")
          document.querySelector('.answer').innerText = 'Gemini'
          document.querySelector('.picture').src='Gemini.webp'
      }   else if(isCancer) {
          // Then return/display the user's horoscope
          // console.log("You're a Cancer")
          document.querySelector('.answer').innerText = 'Cancer'
          document.querySelector('.picture').src='Cancer.webp'
      } else if(isLeo) {
          // Then return/display the user's horoscope
          // console.log("You're a Leo")
          document.querySelector('.answer').innerText = 'Leo'
          document.querySelector('.picture').src='Leo.webp'
      }
        else if(isVirgo) {
          // Then return/display the user's horoscope
          // console.log("You're a Virgo")
          document.querySelector('.answer').innerText = 'Virgo'
          document.querySelector('.picture').src='Virgo.webp'
      }  else if(isLibra) {
            // Then return/display the user's horoscope
            // console.log("You're a Libra")
            document.querySelector('.answer').innerText = 'Libra'
            document.querySelector('.picture').src='Libra.png'
      }     
        else if(isScorpio) {
            // Then return/display the user's horoscope
            // console.log("You're a Scorpio")
            document.querySelector('.answer').innerText = 'Scorpio'
            document.querySelector('.picture').src='Scorpio.webp'
      }
        else if(isSagittarius) {
            // Then return/display the user's horoscope
            // console.log("You're a Sagittarius")
            document.querySelector('.answer').innerText = 'Sagittarius'
            document.querySelector('.picture').src='Sagittarius.webp'
      }  
        else if(isCapricorn) {
            // Then return/display the user's horoscope
            // console.log("You're a Capricorn")
            document.querySelector('.answer').innerText = 'Capricorn'
            document.querySelector('.picture').src='Capricorn.webp'
      }  
        else if(isAquarius) {
            // Then return/display the user's horoscope
            // console.log("You're a Aquarius")
            document.querySelector('.answer').innerText = 'Aquarius'
            document.querySelector('.picture').src='Aquarius.webp'
      } 
        else if(isPisces) {
            // Then return/display the user's horoscope
            // console.log("You're a Pisces")
            document.querySelector('.answer').innerText = 'Pisces'
            document.querySelector('.picture').src='Pisces.webp'
      } 
       
    }