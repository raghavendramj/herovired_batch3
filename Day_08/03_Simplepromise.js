/**
 * Problem Statement :-
 * Trainer :- Assignments to complete by tomorrow
 * Learners :- To finish the assigment
 * Learners Promise :- You will complete the assigment by tomorrow
 * 
 * Promises can be divided into 3 stages
 * Fullfilled :- Complete -> You will complete
 * Rejected :- Incomplete -> You won't finish
 * Pending :- I'm not sure, whether the promise will be completed by tomorrow or not / don't know the staus yet!
 */

 let assignment = (status) => {
    let callBack = (resolve, reject) => {
        if(status){
            resolve("Assignment Completed!");
        } else {
            reject("Incomplete assignments!")
        }
    }
    let assignmentPromise = new Promise(callBack);
    return assignmentPromise;
}

let assignPromise = assignment(false);

let successCallback = (successMsg) => console.log("SUCCESS : Status of the assignment : ", successMsg);
let errorCallback = (error) => console.log("ERROR : Status of the assignment : ", error);

assignPromise.then(successCallback, errorCallback);


//assignment(false) -> false =>  reject -> errorCallback
//assignment(true) -> true => resolve -> successCallback