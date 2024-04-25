import './Text.css'

const Text = ()=>{
    return(
        <div className='text'>
            <div className='about' id='textScroll'>
                <div className='aboutTop'>درباره کلینیک</div>
                <div className='aboutContent'>دکتر علی وصی‌پور جراح دندانپزشک ، فارغ التحصیل سال ١٣٨٥ دانشکده دندانپزشکی دانشگاه علوم پزشکی مشهد و شماره نظام پزشکی ٥٧٦٨٨ دارای ۱۷ سال سابقه کار در حیطه دندانپزشکی با تجربه بالا و یکی از بهترین دندانپزشکان ترمیمی و زیبایی واقع در یوسف‌آباد تهران است که دارای سرتیفیکیت زیبایی Esthetic cosmetic در سال های ٢٠٠٨ و ٢٠١٣ می‌باشد. همچنین ایشان در طی سال های ٢٠٠٩ ، ٢٠١١ و ٢٠١٢ توسط پروفسور دکتر Lee از کشور کره ی جنوبی گواهینامه معتبر ایمپلنت را دریافت نموده است و کلیه کارهای ایمپلنت همراه با ضمانت نامه کتبی و با استفاده از جدیدترین متدها و سیستم های روز دنیا توسط ایشان ارائه می‌گردد .</div>
                <div className='aboutQuestion'>چه چیزی کلینیک شما را نسبت به سایر کلینیک های محله یوسف‌آباد متمایز می‌کند؟</div>
                <div className='aboutAnswer'>در کلینیک ما کلیه جراحی های لثه بدون درد و خونریزی و با کمک لیزر توسط آقای دکتر انجام می گیرد، روش های بکار گرفته توسط ایشان باعث تسریع در بهبود زخم های مخاط دهان و تسریع در بهبود آفت و تبخال می‌گردد. تسریع برداشت تغییر رنگ لثه های تیره ی مایل به قهوه ای و همچنین تسریع در سفید کردن دندان ها نیز از دیگر مزیت های روش های بکار گرفته شده توسط لیزر می‌باشد.</div>
                <div className='aboutQuestion'>شما و تیم‌تان در مطب به چه چیزی افتخار می‌کنید؟</div>
                <div className='aboutAnswer'>مفتخریم که تمامی مواد مورد استفاده در مطب دارای بالاترین کیفیت بوده و از برند های بسیار معروف و معتبر استفاده می گردد. همچنین تمام سعی این مرکز بر این است که محیطی آرام و دلنشین را برای بیماران فراهم نماید .</div>
            </div>
            <div className='question' id='questionScroll'>
                <div className='aboutTop'>سوالات متداول</div>
                <div className='aboutQuestion'>زودترین وقت خالی برای ویزیت در کلینیک دنتینو چه زمانی می‌باشد؟</div>
                <div className='aboutAnswer'>روز های کاری کلینیک دنتینو شنبه تا پنج‌شنبه می‌باشد برای <span onClick={()=>document.getElementById("appointmentScroll").scrollIntoView({behavior:'smooth'})}>دریافت زودترین نوبت کلیک کنید. </span></div>
                <div className='aboutQuestion'>آیا کلینیک دنتینو بیمار جدید هم پذیرش می‌کند؟</div>
                <div className='aboutAnswer'>بله در حال حاضر کلینیک دنتینو بیمار جدید هم پذیرش می‌کند <span onClick={()=>document.getElementById("appointmentScroll").scrollIntoView({behavior:'smooth'})}> برای دریافت زودترین نوبت کلیک کنید.</span></div>
                <div className='aboutQuestion'>مشکل اصلی مراجعینی که به کلینیک دنتینو مراجعه می‌کنند، چیست؟</div>
                <div className='aboutAnswer'>اکثر مراجعین برای درمان ریشه(عصب کشی)، لمینت و ایمپلنت به دنتینو مراجعه می‌کنند. همچنین شما می‌توانید <span onClick={()=>document.getElementById("serviceScroll").scrollIntoView({behavior:'smooth'})}>سایر خدمات قابل ارائه را اینجا</span> مشاهده کنید.</div>
                <div className='aboutQuestion'>آدرس کلینیک تخصصی دنتینو کجاست؟</div>
                <div className='aboutAnswer'>تهران، میدان فاطمی،ابتدای شهیدگمنام، پلاک ۳، طبقه دوم، واحد ۵</div>
            </div>
            <div className='feature'>
                <div className='featureTop'>امکانات کلینیک</div>
                <div className='featureContent'>
                    <span>پخش موسیقی</span>
                    <span>رادیوگرافی</span>
                    <span>اسکنر داخل دهانی</span>
                    <span>ساعت کاری منعطف</span>
                    <span>فضای مدرن</span>
                    <span>دسترسی به مترو</span>
                    <span>چای رایگان</span>
                    <span>تلویزیون</span>
                    <span>رایحه آرام‌بخش</span>
                </div>
            </div>
        </div>
    )
}

export default Text