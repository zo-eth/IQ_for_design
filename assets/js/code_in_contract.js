
const textInLimit = 15000;

function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
}

function getByteLength(text) {
    const encoder = new TextEncoder(); // UTF-8로 변환
    const encodedText = encoder.encode(text); // 바이트 배열 생성
    return encodedText.length; // 바이트 배열의 길이 반환
}

function emojiToText(message) {
    return message.replace(/([\uD800-\uDBFF][\uDC00-\uDFFF])/g, (match) => {
        const codePoint = match.codePointAt(0).toString(16).toUpperCase();

        return "//".slice(1) + `u${codePoint}`;
    });
}



async function progress(curruntSteps, totalSteps) {
    const percentage = (curruntSteps / totalSteps) * 100;
    $(".progress-bar").animate({width: `${percentage}%`}, 500);

    const text = curruntSteps.toString() + " / " + totalSteps.toString();
    $(".progress_status").text("Processing.. [ "+text+" ]");
}


async function progressExample() {
    for (let i = 1; i <6; i++) {
        await progress(i, 5);
        await sleep(1000);
    }
}


async function textCodeIn() {
    try {
        $('.info').text("");

        $('.type_in').prop('disabled', true);

        $('.code_in_button').css('display', 'none');

        $('.progress_div').css("display", "flex");
        await progressExample()
        $('.progress_div').css("display", "none");
        $('.code_in_button_p').text("Check My Data");

        $('.code_in_button').attr("onclick","goto_viewer()");

        $('.code_in_button').css("display", "block");

        $('.info').text("It might take about 2 minutes to fully get onto the block,Please wait and check.");

    } catch (error) {
        console.error("Error signing or sending transaction: ", error);
    }

}

async function imageCodeIn() {
    try {
        $('.info').text("");

        $('.font_manage').css('display', 'none');
        $('.code_in_button').css('display', 'none');

        $('.progress_div').css("display", "flex");
        await progressExample()
        $('.progress_div').css("display", "none");
        $('.code_in_button_p').text("Check My Data");
       // change onclick
        $('.code_in_button').attr("onclick","goto_viewer()");
        $('.code_in_button').css("display", "block");

        $('.info').text("It might take about 2 minutes to fully get onto the block, Please wait and check.");

    } catch (error) {
        console.error("Error signing or sending transaction: ", error);
    }
}

async function codeIn(){
    // if(userwallet == null){
    //    userwallet = await Connect();
    //    if(userwallet == null){
    //        alert("Wallet not found.");
    //        return false;
    //    }
    // }else {
    //
    // }
    if($("#checkbox_image").is(":checked")){
        return await  imageCodeIn();
    }else {
        return await textCodeIn();
    }

}
async function Connect() {
    try {
        // $('.code_in_menu').css('display', 'flex');
        // $('.file-name').css('display', 'block');
        // $('.connect-btn').css('display', 'none');
    } catch (err) {
        console.error(err);
    }
}