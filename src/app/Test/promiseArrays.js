const beatPranay = async () => {

    const promiseArray = [1,2,3];
    
    //? map
    let tempArr = [];
    let tempArr2 = promiseArray.map(async (item, index) => {
      if(index > 0 && tempArr[index - 1]) {
        await tempArr[index - 1];
      } else if(index > 1 && tempArr[index - 2]) {
        await tempArr[index - 2];
        await tempArr[index - 1];
      }
      console.log(`Start iteration for item: ${item}`);
      const result = fakeHttpCall();
      tempArr.push(result);
      await result;
      console.log(`End iteration for item: ${item}`);
      return result;
    });

    
    //? reduce
    // const finalResult = await promiseArray.reduce(async (prev, current) => {
    //   await prev;
    //   console.log(`Start iteration for item: ${current}`);
    //   const result = await fakeHttpCall();
    //   console.log(`End iteration for item: ${current}`);
    //   return result;
    // },0);

    // console.log(`Final result: ${finalResult}`);

    //? forEach
    // promiseArray.forEach(async (item) => {
    //     console.log(`Start iteration for item: ${item}`);
    //     const result = await fakeHttpCall();
    //     console.log(`End iteration for item: ${item}`);
    // });

    //? for loop
    // for(let i = 0; i < promiseArray.length; i++) {
    //     const item = promiseArray[i];
    //     console.log(`Start iteration for item: ${item}`);
    //     const result = await fakeHttpCall();
    //     console.log(`End iteration for item: ${item}`);
    // }
}

const fakeHttpCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Fake HTTP call completed');
        resolve(5);
    }, 1000);
  });
}

beatPranay();