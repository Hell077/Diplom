import LabelModule from "../../../modules/LabelModule/labelModule";

function ReturnPage() {
    return (  
    <>
        <div>
            <LabelModule 
            title="Политика возврата для интернет-магазина игр Cyber-Butik"
            text={`1. Условия возврата товаров

            Мы в Cyber-Butik стремимся к тому, чтобы наши клиенты были полностью удовлетворены своими покупками. Если по какой-либо причине вы не удовлетворены приобретенной игрой или игровым продуктом, вы можете вернуть его в течение 14 дней с момента получения при соблюдении следующих условий:
            
            Товар должен быть в оригинальной упаковке, без следов использования и повреждений.
            Программное обеспечение не должно быть активировано, установлено или использовано.
            Необходимо предоставить чек или другой документ, подтверждающий покупку.
            `}
            text2={`2. Возврат денежных средств

            После получения и проверки возвращенного товара мы уведомим вас о статусе вашего возврата. Если возврат одобрен, возмещение будет автоматически произведено на вашу кредитную карту или другой первоначальный способ оплаты в течение 7 рабочих дней.
            `}
            text3={`3. Исключения из политики возврата

            Некоторые категории товаров не подлежат возврату. К таким товарам относятся:
            
            Игры и программное обеспечение с открытыми лицензионными ключами или активированными продуктами.
            Цифровые товары (ключи, лицензии, подписки), которые были активированы или использованы.
            Подарочные карты и ваучеры.
            `}
            text4={`4. Возврат брака и поврежденных товаров

            Если вы получили товар с дефектом или повреждением, пожалуйста, свяжитесь с нашей службой поддержки клиентов в течение 7 дней с момента получения товара. Мы предложим вам замену или полный возврат стоимости товара, включая все затраты на доставку.
            `}
            text5={`5. Возврат доставки

            Расходы на обратную доставку несет покупатель, за исключением случаев возврата брака или поврежденного товара. В таком случае расходы на доставку будут возмещены.
            `}
            text6={`6. Процесс возврата

            1. Свяжитесь с нашей службой поддержки клиентов по телефону или электронной почте, указав номер заказа и причину возврата.
            2. Получите инструкции и адрес для возврата товара.
            3. Отправьте товар в оригинальной упаковке по указанному адресу.
            4. Уведомьте нас о выполненной отправке, предоставив номер отслеживания.
            `}
            text7={`7. Контактная информация

            Для оформления возврата или получения дополнительной информации, пожалуйста, свяжитесь с нашей службой поддержки клиентов:
            
            Электронная почта: support@cyber-butik.com
            Телефон: +7 (800) 123-45-67
            Мы благодарим вас за покупки в Cyber-Butik и надеемся, что наши игровые продукты принесут вам радость и удовольствие.
            `}
            />

        </div>
    </>
     );
}

export default ReturnPage ;