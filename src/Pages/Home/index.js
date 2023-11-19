import { Grid, Button, Container } from "@mui/material";
import images from "../../assets/images";
import React, { useState } from "react";
function Home() {
    // Show paragraph when click "Xem thêm" in "Lịch sử nhà thờ đức bà".
    const [showMore, setShowMore] = useState(false);
    const text =
        "Nhà thờ chính tòa Đức Bà Sài Gòn được xây dựng vào ngày 7 tháng 10 năm 1877, bởi Giám mục Isodore Comlombert. Kiến trúc của nhà thờ là sự kết hợp giữa phong cách Roman và Gothic nên mang đậm nét cổ điển và sang trọng. Nơi đây được xây dựng theo đồ án của kiến trúc sư J.Bourard bao gồm thánh đường, tháp chuông và công viên. Ngày nay, nhà thờ chính tòa Đức Bà là trung tâm Công giáo lớn nhất Sài Gòn, đồng thời là điểm du lịch nổi tiếng, thu hút đông đảo du khách trong nước và quốc tế tới tham quan.";
    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    // Show paragraph when click "Xem thêm" in "Lịch sử nhà thờ đức bà".
    const [showMore2, setShowMore2] = useState(false);
    const text2 =
        "Công trình đầu tiên phải kể đến là tòa thánh đường bên trong nhà thờ chính tòa Đức Bà. Nơi đây có thiết kế vô cùng đặc biệt với khả năng chịu lực gấp 10 lần toàn bộ kiến trúc của nhà thờ. Tòa thánh đường gồm 1 lòng chính, 2 lòng phụ và 2 dãy nhà nguyện, với tổng chiều dài là 93m, chiều rộng lên tới 35m và chiều cao của phần mái vòm là 21m. Với diện tích như vậy, tòa thánh đường có thể tiếp đơn 1.200 du khách đến tham quan và cầu nguyện cùng lúc.";
    const toggleShowMore2 = () => {
        setShowMore2(!showMore2);
    };

    // Show paragraph when click "Xem thêm" in "Lịch sử nhà thờ đức bà".
    const [showMore3, setShowMore3] = useState(false);
    const text3 =
        "Khu vực công viên nằm ở mặt trước của tòa thánh đường. Ở khu vực trung tâm của công viên có đặt một bức tượng Đức Mẹ Hòa Bình, được nhà điêu khắc G.Ciocchetti dày công thực hiện vào năm 1959. Tổng thể công trình cao 4.6m và nặng 8 tấn, được coi là biểu tượng của nhà thờ Đức Bà. Bức tượng được làm bằng đá cẩm thạch trắng của Ý, mô phỏng hình ảnh Đức Mẹ trong tư thế đứng thẳng và tay cầm trái địa cầu có đính cây thánh giá. Đặc biệt, hình ảnh đôi mắt của Đức Mẹ đăm chiêu nhìn lên trời như đang cầu nguyện hòa bình cho đất nước Việt Nam khiến nhiều du khách không khỏi xúc động.";
    const toggleShowMore3 = () => {
        setShowMore3(!showMore3);
    };

    return (
        //banner image
        <div style={{ marginTop: 90 }} className="w-full">
            {/* <div style={{ height: '500px', overflow: 'hidden' }}>
                <img
                    src={images.loginBg}
                    alt="Banner"
                    className="w-full h-auto cover"
                />
            </div> */}
            <div
                className="h-[540px]"
                style={{
                    backgroundImage: `url(${images.loginBg})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            ></div>
            <Container style={{ marginBottom: 20 }}>
                <h1
                    style={{
                        fontSize: "2.5rem",
                        fontWeight: "bold",
                        margin: "20px 0 30px 0",
                        textAlign: "center",
                    }}
                >
                    Giới thiệu về Nhà thờ đức bà
                </h1>
                <Grid container spacing={2}>
                    <Grid item xs={6} className="flex" justifyContent={"end"}>
                        <img
                            src={images.history}
                            alt="History Image"
                            style={{
                                width: "600px",
                                height: "300px",
                                objectFit: "cover",
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <h2
                            style={{
                                fontSize: "2rem",
                                fontWeight: "bold",
                                margin: "0 0 10px 0",
                                textAlign: "center",
                            }}
                        >
                            Lịch sử nhà thờ
                        </h2>
                        <p
                            style={{
                                fontSize: "1.5rem",
                                textAlign: "justify",
                                textJustify: "inter-word",
                            }}
                        >
                            {showMore
                                ? text
                                : `${text.slice(0, text.length / 2)}...`}
                        </p>
                        <div
                            className="flex"
                            style={{
                                textAlign: "justify",
                                justifyContent: "center",
                                marginTop: 10,
                            }}
                        >
                            <Button
                                variant="contained"
                                style={{ fontSize: "1.1rem" }}
                                onClick={toggleShowMore}
                            >
                                {showMore ? "Rút gọn" : "Xem thêm"}
                            </Button>
                        </div>
                    </Grid>
                </Grid>
                <h1
                    style={{
                        fontSize: "2.5rem",
                        fontWeight: "bold",
                        margin: "20px 0 30px 0",
                        textAlign: "center",
                    }}
                >
                    Phác thảo Nhà thờ đức bà
                </h1>
                <Grid container spacing={2}>
                    <Grid item xs={6} className="flex" justifyContent={"end"}>
                        <img
                            src={images.outline1}
                            alt="Phác thảo 1"
                            style={{
                                width: "600px",
                                height: "300px",
                                objectFit: "cover",
                            }}
                        />
                    </Grid>
                    <Grid item xs={6} className="flex" justifyContent={"start"}>
                        <img
                            src={images.outline2}
                            alt="Phác thảo 2"
                            style={{
                                width: "600px",
                                height: "300px",
                                objectFit: "cover",
                            }}
                        />
                    </Grid>
                    <Grid item xs={6} className="flex" justifyContent={"end"}>
                        <img
                            src={images.outline3}
                            alt="Phác thảo 3"
                            style={{
                                width: "600px",
                                height: "300px",
                                objectFit: "cover",
                            }}
                        />
                    </Grid>
                    <Grid item xs={6} className="flex" justifyContent={"start"}>
                        <img
                            src={images.outline4}
                            alt="Phác thảo 4"
                            style={{
                                width: "600px",
                                height: "300px",
                                objectFit: "cover",
                            }}
                        />
                    </Grid>
                </Grid>
                <h1
                    style={{
                        fontSize: "2.5rem",
                        fontWeight: "bold",
                        margin: "20px 0 30px 0",
                        textAlign: "center",
                    }}
                >
                    Kiến trúc Nhà thờ đức bà
                </h1>
                <Grid container spacing={2}>
                    <Grid
                        item
                        xs={6}
                        container
                        className="flex"
                        direction={"column"}
                        alignItems="center"
                    >
                        <h2
                            style={{
                                width: 300,
                                fontSize: "2rem",
                                fontWeight: "bold",
                                margin: "0 0 10px 0",
                                textAlign: "center",
                            }}
                        >
                            Tòa thánh đường bên trong nhà thờ
                        </h2>
                        <p
                            style={{
                                fontSize: "1.5rem",
                                textAlign: "justify",
                                textJustify: "inter-word",
                            }}
                        >
                            {showMore2
                                ? text2
                                : `${text2.slice(0, text2.length / 2)}...`}
                        </p>
                        <div
                            className="flex"
                            style={{
                                textAlign: "justify",
                                justifyContent: "center",
                                marginTop: 10,
                            }}
                        >
                            <Button
                                variant="contained"
                                style={{ fontSize: "1.1rem" }}
                                onClick={toggleShowMore2}
                            >
                                {showMore2 ? "Rút gọn" : "Xem thêm"}
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={6} className="flex" justifyContent={"start"}>
                        <img
                            src={images.architecture2}
                            alt="Thánh đường bên trong nhà thờ"
                            style={{
                                width: "600px",
                                height: "300px",
                                objectFit: "cover",
                            }}
                        />
                    </Grid>
                    <Grid item xs={6} className="flex" justifyContent={"end"}>
                        <img
                            src={images.architecture1}
                            alt="Khu vực công viên phía ngoài"
                            style={{
                                width: "600px",
                                height: "300px",
                                objectFit: "cover",
                            }}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        container
                        className="flex"
                        direction={"column"}
                        alignItems={"center"}
                    >
                        <h2
                            style={{
                                width: 300,
                                fontSize: "2rem",
                                fontWeight: "bold",
                                margin: "0 0 10px 0",
                                textAlign: "center",
                            }}
                        >
                            Khu vực công viên phía ngoài
                        </h2>
                        <p
                            style={{
                                fontSize: "1.5rem",
                                textAlign: "justify",
                                textJustify: "inter-word",
                            }}
                        >
                            {showMore3
                                ? text3
                                : `${text3.slice(0, text3.length / 2)}...`}
                        </p>
                        <div
                            className="flex"
                            style={{
                                textAlign: "justify",
                                justifyContent: "center",
                                marginTop: 10,
                            }}
                        >
                            <Button
                                variant="contained"
                                style={{ fontSize: "1.1rem" }}
                                onClick={toggleShowMore3}
                            >
                                {showMore3 ? "Rút gọn" : "Xem thêm"}
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Home;
