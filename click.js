function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function clickonit()	{
	$("a[href*='eva']").click();
	var array;
	await sleep(3000);
	array=$("input[value^='评教']");
	if(array.length>0)	{
		$("input[value^='评教']")[0].click()
	}
	else	{
		return;
	}
	await sleep(3000);
    $("input[onclick*='8.8']").click();
    $("input[onclick*='9.6']").click();
    jQuery("#flag").val(true);
    var form = document.courseEvaluateEditForm;
	bg.form.submit(form,"/eams/quality/course/evaluate/lesson-evaluate!saveCourseEvaluate.action","contentDiv");
	$("#saveId").hide();
	$("#sumbitId").hide();
	$("#btnWait").show();
	await sleep(3000);
	clickonit();
}
clickonit();