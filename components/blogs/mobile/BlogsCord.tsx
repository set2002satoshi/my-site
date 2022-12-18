import { Card, Col, Row, Button, Text } from "@nextui-org/react";


type blogContent = {
    imgURL: string,
    ctegory: string,
    subtext: string,
    color: boolean,
}


const BlogsCord = (props: blogContent) => {

    let fontColor
    if (props.color) {
        fontColor = "#fff"
    } else {
        fontColor = "#000000"
    }

    return (
        <Card css={{ w: "100%", h: "300px", maxWidth: "350px", minHeight: "275px" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                
                </Text>
                <Text h3 color={fontColor}>
                
                </Text>
            </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
            <Card.Image
                src={props.imgURL}
                width="100%"
                height="100%"
                objectFit="cover"
                alt="Card example background"
            />
            </Card.Body>
            <Card.Footer
            isBlurred
            css={{
                position: "absolute",
                bgBlur: "#ffffff66",
                borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                bottom: 0,
                zIndex: 1,
            }}
            >
            <Row>
                <Col>
                <Text color="#000" size={16}>
                    {props.ctegory}
                </Text>
                <Text color="#000" size={12}>
                    {props.subtext}
                </Text>
                </Col>
                <Col>
                <Row justify="flex-end">
                    <Button flat auto rounded color="secondary">
                    <Text
                        css={{ color: "inherit" }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                    >
                        SEE BLOG
                    </Text>
                    </Button>
                </Row>
                </Col>
            </Row>
            </Card.Footer>
        </Card>
    )
}

export default BlogsCord


// <Card css={{ p: "$6", mw: "400px" }}>
// <Card.Header>
//   <img
//     alt="nextui logo"
//     src="https://placehold.jp/35x35.png"
//     width="34px"
//     height="34px"
//   />
//   <Grid.Container css={{ pl: "$6" }}>
//     <Grid xs={12}>
//       <Text h3 css={{ lineHeight: "$xs" }}>
//         このフォントは大きくできないのか？
//       </Text>
//     </Grid>
//     <Grid xs={12}>
//       <Text css={{ color: "$accents8" }}>カテゴリを入れた</Text>
//     </Grid>
//   </Grid.Container>
// </Card.Header>
// <Card.Body css={{ py: "$2" }}>
//   <Text>
//       サブタイトル的なやつ
//   </Text>
// </Card.Body>
// <Card.Footer>
//   <Link
//     color="primary"
//     target="_blank"
//     href="https://github.com/nextui-org/nextui"
//   >
//     Visit  blogs on click
//   </Link>
// </Card.Footer>
// </Card>