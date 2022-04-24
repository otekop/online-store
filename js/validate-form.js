function validateForm() {
    // Check for any fields that are blank
    if(hasBlanks()){
        swal("Looks like you missed something!", 
                       "One or more fields appear to be blank", "warning");
        
        return false;
    }
   
}

function hasBlanks() {
    // The values in the array fetches the ids in purchase-form
    var compulsory_fields = new Array("firstName", "lastName", "email", "address",
                                        "suburb", "state", "country", "postcode");
    for (var i = 0; i < compulsory_fields.length; i++) {
        var formField = document.getElementById(compulsory_fields[i]);
        if (formField.value == "") {
            return true;
        }
    }
    return false;
}

function isValidRange(strCheck, validChars) {
    var strlen = strCheck.length;
    var intlen = validChars.length;
    var currChar;
    var currcheck;
    var thischarOK;
    for (var i = 0; i < strlen; i++) {
        currChar = strCheck.charAt(i);
        thischarOK = false;
        for (j = 0; j < intlen; j++) {
            currcheck = validChars.charAt(j);
            if (currcheck === currChar) {
                thischarOK = true;
                break;
            }
        }
        if (thischarOK === false) {
            return false;
        }
    }
}