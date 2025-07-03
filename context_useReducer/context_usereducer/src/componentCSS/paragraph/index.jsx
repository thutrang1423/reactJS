import styles from './Paragraph.module.css'

//webpack đã được xử lý module, nó lấy content(./Paragraph.module.css) nó sử lý và export ra 1 object vào styles
//trong object styles nố đổi tên class thành tên component_tên class_mã hoá

function Paragraph() {
    return (
        <div className={styles.paragraph}>Paragraph</div>
    )
}

export default Paragraph
