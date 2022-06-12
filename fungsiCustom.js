// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => 
{

  let hasilAll = [];
  fs.readFile(file1, 'utf8', (err, data) => 
    {
      let hasilFile1 = JSON.parse(data);
      hasilFile1 = hasilFile1.message;
      console.log(hasilFile1);
      return hasilFile1;
      
      // hasilAll = hasilFile1;
      // console.log(hasilAll);
      // return hasilAll;
    }
  );

  fs.readFile(file2, 'utf8', (err, data) => 
    {
      let hasilFile2 = JSON.parse(data);
      hasilFile2 = hasilFile2[0];
      hasilFile2 = hasilFile2.message;
      console.log(hasilFile2);
      return hasilFile2;

      // hasilAll = hasilFile2;
      // console.log(hasilAll);
      // return hasilAll;
    }
  );

  fs.readFile(file3, 'utf8', (err, data) => 
    {
      let hasilFile3 = JSON.parse(data);
      hasilFile3 = hasilFile3[0].data;
      hasilFile3 = hasilFile3.message;
      console.log(hasilFile3);
      return hasilFile3;
      // hasilAll = hasilFile3;
      // console.log(hasilAll);
      // return hasilAll;
      
    }
  );

  // hasilAll = [hasilFile1, hasilFile2, hasilFile3];

  // fnCallback(err, hasilAll);
}


// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
