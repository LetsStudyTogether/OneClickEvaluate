function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var sleeptime=3500;

async function clickonit(sleeptime) {
    $("a[href*='eva']").click();
    var array;
    await sleep(sleeptime);
    array = $("input[value^='评教']");
    if (array.length > 0) {
        $("input[value^='评教']")[0].click()
    }
    else {
        alert('Finish!');
        return;
    }
    await sleep(sleeptime);
    $("input[onclick*='8.8']").click();
    $("input[onclick*='9.6']").click();
    jQuery("#flag").val(true);
    var form = document.courseEvaluateEditForm;
    bg.form.submit(form, "/eams/quality/course/evaluate/lesson-evaluate!saveCourseEvaluate.action", "contentDiv");
    $("#saveId").hide();
    $("#sumbitId").hide();
    $("#btnWait").show();
    await sleep(sleeptime);
    clickonit();
}

$("a[href*='eva']").click();
await sleep(sleeptime);
$("td[val=42]").click();
$("td[index=19]").click();
$("input[type=submit]").click();
await sleep(sleeptime);
clickonit();
