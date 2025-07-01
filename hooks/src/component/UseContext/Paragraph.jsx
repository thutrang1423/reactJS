// import { ThemeContext } from "./19UseContext";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";



function Paragraph() {
    // console.log('theme:', theme);
    // return (
    //     <p className={theme}>Một trong những lý do phổ biến nhất là do khả năng hấp thụ kém. Các tình trạng sức khỏe như thiếu máu, bệnh celiac, bệnh Crohn, hoặc việc sử dụng thuốc lâu dài đều có thể ảnh hưởng đến khả năng hấp thụ vitamin B12 từ đường tiêu hóa.
    //         Tiến sĩ Agarwal cho biết càng lớn tuổi, nguy cơ thiếu B12 càng cao. Người già có xu hướng sản xuất ít axit dạ dày, một yếu tố cần thiết để giải phóng vitamin B12 từ thực phẩm. Ngoài ra, một số người thiếu một loại protein đặc biệt giúp hấp thụ B12 đúng cách, khiến cơ thể không tận dụng được vitamin dù ăn nhiều thịt.
    //         Cùng quan điểm, Tiến sĩ Narander Singhla, cố vấn nội khoa tại Bệnh viện CK Birla (Delhi), bổ sung rằng một số loại thuốc phổ biến có thể làm giảm hấp thụ B12.
    //         Các loại thuốc như thuốc ức chế bơm proton (PPI), thuốc chẹn H2 dùng để giảm axit dạ dày, hay thuốc điều trị tiểu đường metformin đều có thể can thiệp vào quá trình hấp thu vitamin này.
    //     </p>
    // )

    // const theme = useContext(ThemeContext)
    // console.log('theme:', theme);
    // return (
    //     <p className={theme}>Một trong những lý do phổ biến nhất là do khả năng hấp thụ kém. Các tình trạng sức khỏe như thiếu máu, bệnh celiac, bệnh Crohn, hoặc việc sử dụng thuốc lâu dài đều có thể ảnh hưởng đến khả năng hấp thụ vitamin B12 từ đường tiêu hóa.
    //         Tiến sĩ Agarwal cho biết càng lớn tuổi, nguy cơ thiếu B12 càng cao. Người già có xu hướng sản xuất ít axit dạ dày, một yếu tố cần thiết để giải phóng vitamin B12 từ thực phẩm. Ngoài ra, một số người thiếu một loại protein đặc biệt giúp hấp thụ B12 đúng cách, khiến cơ thể không tận dụng được vitamin dù ăn nhiều thịt.
    //         Cùng quan điểm, Tiến sĩ Narander Singhla, cố vấn nội khoa tại Bệnh viện CK Birla (Delhi), bổ sung rằng một số loại thuốc phổ biến có thể làm giảm hấp thụ B12.
    //         Các loại thuốc như thuốc ức chế bơm proton (PPI), thuốc chẹn H2 dùng để giảm axit dạ dày, hay thuốc điều trị tiểu đường metformin đều có thể can thiệp vào quá trình hấp thu vitamin này.
    //     </p>
    // )



    //global context
    const context = useContext(ThemeContext)
    // console.log('theme:', theme);
    return (
        <p className={context.theme}>Cá chép sư tử là một loại cá cảnh được ưa chuộng với nhiều đặc điểm nổi bật. Dưới đây là một số thông tin quan trọng về cá chép sư tử: <br />
            Đặc điểm: Cá chép sư tử có thân hình đẹp, vây và đuôi dài, thường có màu trắng tinh khiết, mang lại vẻ đẹp thanh nhã khi bơi trong nước. <br />
            Cách nuôi: Để nuôi cá chép sư tử khỏe mạnh, cần chú ý đến chế độ ăn uống và môi trường sống, cũng như các biện pháp phòng bệnh hiệu quả.<br />
            Ý nghĩa văn hóa: Loài cá này không chỉ đẹp mắt mà còn mang ý nghĩa về sự giàu có và may mắn trong văn hóa Á Đông.
        </p>
    )
}

export default Paragraph
