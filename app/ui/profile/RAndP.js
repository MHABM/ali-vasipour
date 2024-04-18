import './RAndP.css'

const RAndP = ()=>{
    return(
        <div className='rAndP'>
            <div className='review'>
                <div className='reviewRight'>
                    <span>امتیاز کلی</span>
                    <div className='rating'>۴.۹</div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 243 40"><g><path d="M32.2 40l-10.7-7.8L10.8 40l-3.7-2.7 4.1-12.6L.5 17l1.4-4.4h13.2L19.2 0h4.6l4.1 12.6h13.2l1.4 4.4-10.7 7.8 4.1 12.6-3.7 2.6zm50 0l-10.7-7.8L60.8 40l-3.7-2.7 4.1-12.6L50.5 17l1.4-4.4h13.2L69.2 0h4.6l4.1 12.6h13.2l1.4 4.4-10.7 7.8 4.1 12.6-3.7 2.6zm50 0l-10.7-7.8-10.7 7.8-3.7-2.7 4.1-12.6-10.7-7.7 1.4-4.4h13.2L119.2 0h4.6l4.1 12.6h13.2l1.4 4.4-10.7 7.8 4.1 12.6-3.7 2.6zm49.8 0l-10.7-7.8-10.7 7.8-3.7-2.7 4.1-12.6-10.7-7.7 1.4-4.4h13.2L169 0h4.6l4.1 12.6h13.2l1.4 4.4-10.7 7.8 4.1 12.6L182 40zm50.2 0l-10.7-7.8-10.7 7.8-3.7-2.7 4.1-12.6-10.7-7.7 1.4-4.4h13.2L219.2 0h4.6l4.1 12.6h13.2l1.4 4.4-10.7 7.8 4.1 12.6-3.7 2.6z" fill="#66c61c" fill-opacity="1"></path></g></svg>
                    <div className='ratingBlue' onClick={()=>document.getElementById("reviewsScroll").scrollIntoView({behavior:'smooth'})}>همه نظرات</div>
                </div>
                <div className='ratingsMobile'>
                    <div className='ratingsMobileItem'>
                        <svg height='26px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.46647 20.3467H16.9665C17.6581 20.3467 18.2498 19.9301 18.4998 19.3301L21.0165 13.4551C21.0915 13.2634 21.1331 13.0634 21.1331 12.8467V11.1801C21.1331 10.2634 20.3831 9.51339 19.4665 9.51339H14.2081L14.9998 5.70505L15.0248 5.43839C15.0248 5.09672 14.8831 4.78005 14.6581 4.55505L13.7748 3.68005L8.28314 9.17172C7.98314 9.47172 7.7998 9.88839 7.7998 10.3467V18.6801C7.7998 19.5967 8.5498 20.3467 9.46647 20.3467ZM9.46647 10.3467L13.0831 6.73005L11.9665 11.1801H19.4665V12.8467L16.9665 18.6801H9.46647V10.3467ZM2.7998 10.3467H6.13314V20.3467H2.7998V10.3467Z" fill="#66c61c"></path></svg>
                        <div className='ratingsItem'>
                            <span className='itemTop'>بسیار توصیه شده</span>
                            <span className='itemBottom'>%۱۰۰ بیماران این دکتر را توصیه کرده‌اند</span>
                        </div>
                    </div>
                    <div className='ratingsMobileItem'>
                        <svg height='34px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M11.9803 3.15552C7.10426 3.15552 3.15576 7.11285 3.15576 11.9889C3.15576 16.8649 7.10426 20.8222 11.9803 20.8222C16.8651 20.8222 20.8224 16.8649 20.8224 11.9889C20.8224 7.11285 16.8651 3.15552 11.9803 3.15552ZM11.9891 19.0555C8.08476 19.0555 4.92243 15.8932 4.92243 11.9889C4.92243 8.08452 8.08476 4.92218 11.9891 4.92218C15.8934 4.92218 19.0558 8.08452 19.0558 11.9889C19.0558 15.8932 15.8934 19.0555 11.9891 19.0555ZM12.4308 7.57218H11.1058V12.8722L15.7433 15.6547L16.4058 14.5682L12.4308 12.2097V7.57218Z" fill="#66c61c"></path></svg>
                        <div className='ratingsItem'>
                            <span className='itemTop'>کمترین زمان انتظار</span>
                            <span className='itemBottom'>%۹۶ مراجعین کمتر از ۳۰ دقیقه برای ویزیت منتظر مانده اند</span>
                        </div>
                    </div>
                    <div className='ratingsMobileItem'>
                    <svg height='33px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.3188 4.74144H17.5238V3.13538H15.9338V4.74144H7.98379V3.13538H6.39379V4.74144H5.59879C4.72429 4.74144 4.00879 5.46416 4.00879 6.3475V19.196C4.00879 20.0793 4.72429 20.802 5.59879 20.802H18.3188C19.1933 20.802 19.9088 20.0793 19.9088 19.196V6.3475C19.9088 5.46416 19.1933 4.74144 18.3188 4.74144ZM18.3188 19.196H5.59879V8.75659H18.3188V19.196Z" fill="#66c61c"></path></svg>
                        <div className='ratingsItem'>
                            <span className='itemTop'>امکان ویزیت بیمار جدید</span>
                            <span className='itemBottom'>بله در حال حاضر دکتر وصی‌پور بیمار جدید هم پذیرش می‌کنند</span>
                        </div>
                    </div>
                </div>
                <div className='reviewLeft'>
                    <div className='reviewLeftTop'>مفیدترین نظر</div>
                    <div className='reviewLeftMiddle'>متاسفانه پیدا کردن دکتری که هم کار طبابتش خوب باشه و هم به لحاظ روحی بتونی باهاش ارتباط بگیری خیلی سخته دکتر بسیار انسان والا برخورد عالی تشخیص و درمان عالی با صبر و حوصله بسیار مشکلات را برای بیمار توضیح میدهند و با آرامش و مهارت بالا به درمان میپردازند محیط مطب بسیار آرام با انرژی مثبت همراه با منشی بسیار نازنین و خوش برخورد که اصلا استرس موجود در کلینیک دندانپزشکی را حس نمی‌کنید در مورد هزینه های درمان هم بسیار منصف هستند در مجموع صد در صد پیشنهاد میکنم.</div>
                    <div className='reviewLeftBottom'>پریسا . ۱۷ اردیبهشت ۱۴۰۲</div>
                    <button onClick={()=>document.getElementById("reviewsScroll").scrollIntoView({behavior:'smooth'})}>دیدن همه نظرات</button>
                </div>
            </div>
            <div className='pictures' id='picScroll'>
                <div className='picTop'>
                    <div className='pic1'></div>
                    <div className='pic2'></div>
                </div>
                <div className='picBottom'>
                    <div className='pic3'></div>
                    <div className='pic4'></div>
                    <div className='pic5'></div>
                </div>
            </div>
        </div>
    )
}

export default RAndP