import { Grid, Button, Container } from "@mui/material";
import images from "../../assets/images"
import { Margin } from "@mui/icons-material";
function Home() {
    return (
        //banner image
        <div style={{marginTop: 90}} className="w-full">
            <div style={{ height: '500px', overflow: 'hidden' }}>
                <img
                    src={images.loginBg}
                    alt="Banner Image"
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
            </div>
            <Container style={{marginBottom: 20}}>
                <h1 style={{fontSize: "2.5rem", fontWeight: "bold", margin:"20px 0 30px 0", textAlign: "center"}}>Giới thiệu về Nhà thờ đức bà</h1>
                <Grid container spacing={2} >
                    <Grid item xs={6} className="flex" justifyContent={"end"}>
                        <img
                            src={images.history}
                            alt="History Image"
                            style={{ width: '300px', height: 'auto', objectFit: 'cover' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <h2 style={{width:300 ,fontSize: "1.5rem", fontWeight: "bold", margin:"0 0 10px 0", textAlign: "center"}}>Lịch sử nhà thờ</h2>
                        <p style={{width: 300}}>Nhà thờ chính tòa Đức Bà Sài Gòn được xây dựng vào ngày 7 tháng 10 năm 1877, bởi Giám mục Isodore Comlombert. Kiến trúc của nhà thờ là sự kết hợp giữa phong cách Roman và a Gothic nên mang đậm nét cổ điển và sang trọng</p>
                        <div className="flex" style={{textAlign: "justify", justifyContent: "center", marginTop: 10, width: 300}}>
                            <Button variant="contained" href="#">
                                Xem thêm
                            </Button>
                        </div>
                    </Grid>
                </Grid>
                <h1 style={{fontSize: "2.5rem", fontWeight: "bold", margin:"20px 0 30px 0", textAlign: "center"}}>Phác thảo Nhà thờ đức bà</h1>
                <Grid container spacing={2}>
                    <Grid item xs={6} className="flex" justifyContent={"end"}>
                    <img
                        src={images.outline1}
                        alt="Outline 1 Image"
                        style={{ width: '300px', height: 'auto', objectFit: 'cover' }}
                    />
                    </Grid>
                    <Grid item xs={6} className="flex" justifyContent={"start"}>
                    <img
                        src={images.outline2}
                        alt="Outline 2 Image"
                        style={{ width: '300px', height: 'auto', objectFit: 'cover' }}
                    />
                    </Grid>
                    <Grid item xs={6} className="flex" justifyContent={"end"}>
                    <img
                        src={images.outline3}
                        alt="Outline 3 Image"
                        style={{ width: '300px', height: 'auto', objectFit: 'cover' }}
                    />
                    </Grid>
                    <Grid item xs={6} className="flex" justifyContent={"start"}>
                    <img
                        src={images.outline4}
                        alt="Outline 4 Image"
                        style={{ width: '300px', height: 'auto', objectFit: 'cover' }}
                    />
                    </Grid>
                </Grid>
                <h1 style={{fontSize: "2.5rem", fontWeight: "bold", margin:"20px 0 30px 0", textAlign: "center"}}>Kiến trúc Nhà thờ đức bà</h1>
                <Grid container spacing={2}>
                    <Grid item xs={6} container className="flex" direction={"column"} alignItems="flex-end">
                    <h2 style={{width:300 ,fontSize: "1.5rem", fontWeight: "bold", margin:"0 0 10px 0", textAlign: "center"}}>Lịch sử nhà thờ</h2>
                        <p style={{width: 300}}>Nhà thờ chính tòa Đức Bà Sài Gòn được xây dựng vào ngày 7 tháng 10 năm 1877, bởi Giám mục Isodore Comlombert. Kiến trúc của nhà thờ là sự kết hợp giữa phong cách Roman và a Gothic nên mang đậm nét cổ điển và sang trọng</p>
                        <div className="flex" style={{textAlign: "justify", justifyContent: "center", marginTop: 10, width: 300}}>
                            <Button variant="contained" href="#">
                                Xem thêm
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={6} className="flex" justifyContent={"start"}>
                    <img
                        src={images.architecture1}
                        alt="Architecture 1 Image"
                        style={{ width: '300px', height: 'auto', objectFit: 'cover' }}
                    />
                    </Grid>
                    <Grid item xs={6} className="flex" justifyContent={"end"}>
                    <img
                        src={images.architecture2}
                        alt="Architecture 2 Image"
                        style={{ width: '300px', height: 'auto', objectFit: 'cover' }}
                    />
                    </Grid>
                    <Grid item xs={6} container className="flex" direction={"column"} justifyContent={"start"}>
                    <h2 style={{width:300 ,fontSize: "1.5rem", fontWeight: "bold", margin:"0 0 10px 0", textAlign: "center"}}>Lịch sử nhà thờ</h2>
                        <p style={{width: 300}}>Nhà thờ chính tòa Đức Bà Sài Gòn được xây dựng vào ngày 7 tháng 10 năm 1877, bởi Giám mục Isodore Comlombert. Kiến trúc của nhà thờ là sự kết hợp giữa phong cách Roman và a Gothic nên mang đậm nét cổ điển và sang trọng</p>
                        <div className="flex" style={{textAlign: "justify", justifyContent: "center", marginTop: 10, width: 300}}>
                            <Button variant="contained" href="#">
                                Xem thêm
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Home;
