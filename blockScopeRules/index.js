let y = 2;

// Y - inside the block 
{
    let y = 20; //20
    console.log("inside the block: " + y);
    {
      // another block
      let y = 200;
      console.log("Another block: " + y); //200
    }
}

// Y - outside the block 
console.log("Outside the block: " + y);