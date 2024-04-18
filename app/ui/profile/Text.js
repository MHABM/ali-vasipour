import './Text.css'

const Text = ()=>{
    return(
        <div className='text'>
            <div className='about' id='textScroll'>
                <div className='aboutTop'>درباره دندانپزشک</div>
                <div className='aboutContent'>دکتر علی وصی‌پور جراح دندانپزشک ، فارغ التحصیل سال ١٣٨٥ دانشکده دندانپزشکی دانشگاه علوم پزشکی مشهد و شماره نظام پزشکی ٥٧٦٨٨ دارای ۱۷ سال سابقه کار در حیطه دندانپزشکی با تجربه بالا و یکی از بهترین دندانپزشکان ترمیمی و زیبایی واقع در یوسف‌آباد تهران است که دارای سرتیفیکیت زیبایی Esthetic cosmetic در سال های ٢٠٠٨ و ٢٠١٣ می‌باشد. همچنین ایشان در طی سال های ٢٠٠٩ ، ٢٠١١ و ٢٠١٢ توسط پروفسور دکتر Lee از کشور کره ی جنوبی گواهینامه معتبر ایمپلنت را دریافت نموده است و کلیه کارهای ایمپلنت همراه با ضمانت نامه کتبی و با استفاده از جدیدترین متدها و سیستم های روز دنیا توسط ایشان ارائه می‌گردد .</div>
                <div className='aboutQuestion'>چه چیزی کلینیک شما را نسبت به سایر کلینیک های محله یوسف‌آباد متمایز می‌کند؟</div>
                <div className='aboutAnswer'>در کلینیک ما کلیه جراحی های لثه بدون درد و خونریزی و با کمک لیزر توسط آقای دکتر انجام می گیرد، روش های بکار گرفته توسط ایشان باعث تسریع در بهبود زخم های مخاط دهان و تسریع در بهبود آفت و تبخال می‌گردد. تسریع برداشت تغییر رنگ لثه های تیره ی مایل به قهوه ای و همچنین تسریع در سفید کردن دندان ها نیز از دیگر مزیت های روش های بکار گرفته شده توسط لیزر می‌باشد.</div>
                <div className='aboutQuestion'>شما و تیم‌تان در مطب به چه چیزی افتخار می‌کنید؟</div>
                <div className='aboutAnswer'>مفتخریم که تمامی مواد مورد استفاده در مطب دارای بالاترین کیفیت بوده و از برند های بسیار معروف و معتبر استفاده می گردد. همچنین تمام سعی این مرکز بر این است که محیطی آرام و دلنشین را برای بیماران فراهم نماید .</div>
            </div>
            <div className='question' id='questionScroll'>
                <div className='aboutTop'>سوالات متداول</div>
                <div className='aboutQuestion'>زودترین وقت خالی برای ویزیت توسط دکتر وصی‌پور چه زمانی می‌باشد؟</div>
                <div className='aboutAnswer'>آقای دکتر بیماران را روز های شنبه تا چهارشنبه می‌بینند برای <span onClick={()=>document.getElementById("appointmentScroll").scrollIntoView({behavior:'smooth'})}>دریافت زودترین نوبت </span>کافی است با مطب تماس بگیرید.</div>
                <div className='aboutQuestion'>آیا دکتر وصی‌پور بیمار جدید هم پذیرش می‌کنند؟</div>
                <div className='aboutAnswer'>بله در حال حاضر ایشان بیمار جدید هم پذیرش می‌کنند <span onClick={()=>document.getElementById("appointmentScroll").scrollIntoView({behavior:'smooth'})}> برای دریافت نوبت با مطب تماس بگیرید.</span></div>
                <div className='aboutQuestion'>مشکل اصلی بیمارانی که برای درمان به دکتر وصی‌پور مراجعه می‌کنند، چیست؟</div>
                <div className='aboutAnswer'>اکثر بیماران برای درمان ریشه(عصب کشی)، روکش و جرم‌گیری به ایشان مراجعه می‌کنند. همچنین شما می‌توانید <span onClick={()=>document.getElementById("serviceScroll").scrollIntoView({behavior:'smooth'})}>سایر خدمات قابل ارائه را اینجا</span> مشاهده کنید.</div>
                <div className='aboutQuestion'>آیا دکتر وصی‌پور خدمات سفید کردن دندان را نیز ارائه می‌دهد؟</div>
                <div className='aboutAnswer'>بله ایشان درمان های بلیچینگ و ونیر کاموزیت را انجام می‌دهند که منجر به سفید شدن دندان‌ها می‌شود برای کسب اطلاعات بیشتر <span onClick={()=>document.getElementById("appointmentScroll").scrollIntoView({behavior:'smooth'})}>با مطب تماس بگیرید.</span></div>
                <div className='aboutQuestion'>آدرس مطب دکتر وصی‌پور کجاست؟</div>
                <div className='aboutAnswer'>تهران، یوسف‌آباد، خیابان ولیعصر، قبل از تقاطع مطهری، خیابان حسینی راد، ساختمان رادکام، طبقه دوم</div>
            </div>
            <div className='insurance'>
                <div className='insuranceTop'>بیمه های طرف قرارداد</div>
                <div className='insuranceContent'>
                    <span>تامین اجتماعی</span>
                    <span>بیمه سلامت</span>
                    <span>نیروهای مسلح</span>
                    <span>بیمه آسیا</span>
                    <span>بیمه پارسیان</span>
                    <span>بیمه معلم</span>
                    <span>آتیه‌سازان حافظ</span>
                    <span>بیمه رازی</span>
                    <span>بیمه ما</span>
                    <span>بیمه نوین</span>
                    <span>بانک مرکزی</span>
                    <span>بانک ملی</span>
                </div>
            </div>
            <div className='feature'>
                <div className='featureTop'>امکانات کلینیک</div>
                <div className='featureContent'>
                    <span>اینترنت رایگان</span>
                    <span>پارکینگ</span>
                    <span>پخش موسیقی</span>
                    <span>رادیوگرافی</span>
                    <span>اسکنر داخل دهانی</span>
                    <span>ساعت کاری منعطف</span>
                    <span>فضای کودک</span>
                    <span>دسترسی به BRT</span>
                    <span>پرداخت اقساطی</span>
                    <span>تلویزیون</span>
                    <span>رایحه آرام‌بخش</span>
                    <span>قهوه رایگان</span>
                </div>
            </div>
        </div>
    )
}

export default Text