import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Menu } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { Dropdown } from "@atrilabs/react-component-manifests/src/manifests/Dropdown/Dropdown.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { useHeadlineCb, useNavbar_ContainerCb, useNav_elementsCb, userightCb, usecartCb, usenavlinksCb, usehome_view1Cb, usebody_containerCb, usebodyCb, useleftCb, usehome_view2Cb, usehomeview2_containerCb, useheadlines2Cb, usedualsportCb, usefreetestCb, usefreespinCb, usebody_view2Cb, usehelemtsbodyCb, usefeaturesCb, usefeatures_containerCb, usefeatures_list_containerCb, useFlex38Cb, useFlex41Cb, useFlex42Cb, usepro_choicCb, useFlex44Cb, useprochoice_leftCb, userating_iconsCb, useprochoice_rightCb, useFlex47Cb, useshop_section_containerCb, useshop_sectionCb, useitems_containerCb, useitem_1Cb, usetextCb, useFlex81Cb, useFlex80Cb, useFlex344Cb, useFlex343Cb, useblog_sectionCb, useblogsection_continerCb, useblogsCb, useblog_oneCb, useblog_twoCb, useblog_threeCb, useFOOTERCb, usefooter_containerCb, usetopCb, useFlex108Cb, usepages_footer_containerCb, useFlex110Cb, usemisc_footer_containerCb, useFlex113Cb, usesocial_footer_containerCb, useFlex115Cb, useconncet_social_containerCb, useFlex117Cb, usebottomCb, useatrilabsCb, useonline_payCb, useimages1Cb, useFlex57Cb, useFlex56Cb, useFlex59Cb, useimages_2Cb, useFlex336Cb, useFlex335Cb, useFlex334Cb, useimages_3Cb, useFlex340Cb, useFlex339Cb, useFlex338Cb, useheadline_textCb, uselogoCb, useImage2Cb, useMenu1Cb, useImage3Cb, useTextBox11Cb, useHomeCb, usePagesCb, useDropdown3Cb, useTextBox214Cb, useImage5Cb, useTextBox12Cb, useTextBox13Cb, useTextBox14Cb, useButton1Cb, useImage8Cb, useTextBox21Cb, useTextBox22Cb, useImage12Cb, useTextBox23Cb, useImage13Cb, useButton4Cb, useTextBox27Cb, useTextBox28Cb, useFEATURESCb, useTextBox30Cb, useTextBox31Cb, useImage14Cb, useTextBox33Cb, useTextBox34Cb, useImage16Cb, useTextBox35Cb, useTextBox36Cb, useImage17Cb, useTextBox37Cb, useTextBox38Cb, useTextBox39Cb, usegoogle_rating_textCb, useImage19Cb, useImage21Cb, useImage22Cb, useImage23Cb, useImage24Cb, useImage18Cb, useTextBox41Cb, useTextBox42Cb, useTextBox68Cb, useButton8Cb, useTangerineCb, useTextBox70Cb, useImage29Cb, useImage31Cb, useTextBox74Cb, useTextBox75Cb, useImage147Cb, useTextBox403Cb, useTextBox404Cb, useButton9Cb, useTextBox76Cb, useTextBox77Cb, useTextBox83Cb, useDiv6Cb, useDiv7Cb, useTextBox102Cb, useTextBox103Cb, useTextBox104Cb, useDiv8Cb, useTextBox105Cb, useTextBox106Cb, useTextBox107Cb, useImage44Cb, useTextBox117Cb, useTextBox118Cb, useTextBox119Cb, useTextBox120Cb, useTextBox121Cb, useTextBox122Cb, useTextBox134Cb, useTextBox129Cb, useTextBox130Cb, useTextBox131Cb, useTextBox132Cb, useTextBox133Cb, useTextBox140Cb, useTextBox136Cb, useTextBox137Cb, useTextBox138Cb, useTextBox139Cb, useTextBox146Cb, useTextBox141Cb, useTextBox142Cb, useTextBox143Cb, useTextBox147Cb, useTextBox148Cb, useImage45Cb, useImage46Cb, useImage47Cb, useImage26Cb, useTextBox51Cb, useTextBox52Cb, usenumberCb, useTextBox59Cb, useImage144Cb, useTextBox395Cb, useTextBox396Cb, useTextBox393Cb, useTextBox394Cb, useImage145Cb, useTextBox399Cb, useTextBox400Cb, useTextBox397Cb, useTextBox398Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const HeadlineProps = useStore((state)=>state["Home"]["Headline"]);
const HeadlineIoProps = useIoStore((state)=>state["Home"]["Headline"]);
const HeadlineCb = useHeadlineCb()
const Navbar_ContainerProps = useStore((state)=>state["Home"]["Navbar_Container"]);
const Navbar_ContainerIoProps = useIoStore((state)=>state["Home"]["Navbar_Container"]);
const Navbar_ContainerCb = useNavbar_ContainerCb()
const Nav_elementsProps = useStore((state)=>state["Home"]["Nav_elements"]);
const Nav_elementsIoProps = useIoStore((state)=>state["Home"]["Nav_elements"]);
const Nav_elementsCb = useNav_elementsCb()
const rightProps = useStore((state)=>state["Home"]["right"]);
const rightIoProps = useIoStore((state)=>state["Home"]["right"]);
const rightCb = userightCb()
const cartProps = useStore((state)=>state["Home"]["cart"]);
const cartIoProps = useIoStore((state)=>state["Home"]["cart"]);
const cartCb = usecartCb()
const navlinksProps = useStore((state)=>state["Home"]["navlinks"]);
const navlinksIoProps = useIoStore((state)=>state["Home"]["navlinks"]);
const navlinksCb = usenavlinksCb()
const home_view1Props = useStore((state)=>state["Home"]["home_view1"]);
const home_view1IoProps = useIoStore((state)=>state["Home"]["home_view1"]);
const home_view1Cb = usehome_view1Cb()
const body_containerProps = useStore((state)=>state["Home"]["body_container"]);
const body_containerIoProps = useIoStore((state)=>state["Home"]["body_container"]);
const body_containerCb = usebody_containerCb()
const bodyProps = useStore((state)=>state["Home"]["body"]);
const bodyIoProps = useIoStore((state)=>state["Home"]["body"]);
const bodyCb = usebodyCb()
const leftProps = useStore((state)=>state["Home"]["left"]);
const leftIoProps = useIoStore((state)=>state["Home"]["left"]);
const leftCb = useleftCb()
const home_view2Props = useStore((state)=>state["Home"]["home_view2"]);
const home_view2IoProps = useIoStore((state)=>state["Home"]["home_view2"]);
const home_view2Cb = usehome_view2Cb()
const homeview2_containerProps = useStore((state)=>state["Home"]["homeview2_container"]);
const homeview2_containerIoProps = useIoStore((state)=>state["Home"]["homeview2_container"]);
const homeview2_containerCb = usehomeview2_containerCb()
const headlines2Props = useStore((state)=>state["Home"]["headlines2"]);
const headlines2IoProps = useIoStore((state)=>state["Home"]["headlines2"]);
const headlines2Cb = useheadlines2Cb()
const dualsportProps = useStore((state)=>state["Home"]["dualsport"]);
const dualsportIoProps = useIoStore((state)=>state["Home"]["dualsport"]);
const dualsportCb = usedualsportCb()
const freetestProps = useStore((state)=>state["Home"]["freetest"]);
const freetestIoProps = useIoStore((state)=>state["Home"]["freetest"]);
const freetestCb = usefreetestCb()
const freespinProps = useStore((state)=>state["Home"]["freespin"]);
const freespinIoProps = useIoStore((state)=>state["Home"]["freespin"]);
const freespinCb = usefreespinCb()
const body_view2Props = useStore((state)=>state["Home"]["body_view2"]);
const body_view2IoProps = useIoStore((state)=>state["Home"]["body_view2"]);
const body_view2Cb = usebody_view2Cb()
const helemtsbodyProps = useStore((state)=>state["Home"]["helemtsbody"]);
const helemtsbodyIoProps = useIoStore((state)=>state["Home"]["helemtsbody"]);
const helemtsbodyCb = usehelemtsbodyCb()
const featuresProps = useStore((state)=>state["Home"]["features"]);
const featuresIoProps = useIoStore((state)=>state["Home"]["features"]);
const featuresCb = usefeaturesCb()
const features_containerProps = useStore((state)=>state["Home"]["features_container"]);
const features_containerIoProps = useIoStore((state)=>state["Home"]["features_container"]);
const features_containerCb = usefeatures_containerCb()
const features_list_containerProps = useStore((state)=>state["Home"]["features_list_container"]);
const features_list_containerIoProps = useIoStore((state)=>state["Home"]["features_list_container"]);
const features_list_containerCb = usefeatures_list_containerCb()
const Flex38Props = useStore((state)=>state["Home"]["Flex38"]);
const Flex38IoProps = useIoStore((state)=>state["Home"]["Flex38"]);
const Flex38Cb = useFlex38Cb()
const Flex41Props = useStore((state)=>state["Home"]["Flex41"]);
const Flex41IoProps = useIoStore((state)=>state["Home"]["Flex41"]);
const Flex41Cb = useFlex41Cb()
const Flex42Props = useStore((state)=>state["Home"]["Flex42"]);
const Flex42IoProps = useIoStore((state)=>state["Home"]["Flex42"]);
const Flex42Cb = useFlex42Cb()
const pro_choicProps = useStore((state)=>state["Home"]["pro_choic"]);
const pro_choicIoProps = useIoStore((state)=>state["Home"]["pro_choic"]);
const pro_choicCb = usepro_choicCb()
const Flex44Props = useStore((state)=>state["Home"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["Home"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const prochoice_leftProps = useStore((state)=>state["Home"]["prochoice_left"]);
const prochoice_leftIoProps = useIoStore((state)=>state["Home"]["prochoice_left"]);
const prochoice_leftCb = useprochoice_leftCb()
const rating_iconsProps = useStore((state)=>state["Home"]["rating_icons"]);
const rating_iconsIoProps = useIoStore((state)=>state["Home"]["rating_icons"]);
const rating_iconsCb = userating_iconsCb()
const prochoice_rightProps = useStore((state)=>state["Home"]["prochoice_right"]);
const prochoice_rightIoProps = useIoStore((state)=>state["Home"]["prochoice_right"]);
const prochoice_rightCb = useprochoice_rightCb()
const Flex47Props = useStore((state)=>state["Home"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["Home"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const shop_section_containerProps = useStore((state)=>state["Home"]["shop_section_container"]);
const shop_section_containerIoProps = useIoStore((state)=>state["Home"]["shop_section_container"]);
const shop_section_containerCb = useshop_section_containerCb()
const shop_sectionProps = useStore((state)=>state["Home"]["shop_section"]);
const shop_sectionIoProps = useIoStore((state)=>state["Home"]["shop_section"]);
const shop_sectionCb = useshop_sectionCb()
const items_containerProps = useStore((state)=>state["Home"]["items_container"]);
const items_containerIoProps = useIoStore((state)=>state["Home"]["items_container"]);
const items_containerCb = useitems_containerCb()
const item_1Props = useStore((state)=>state["Home"]["item_1"]);
const item_1IoProps = useIoStore((state)=>state["Home"]["item_1"]);
const item_1Cb = useitem_1Cb()
const textProps = useStore((state)=>state["Home"]["text"]);
const textIoProps = useIoStore((state)=>state["Home"]["text"]);
const textCb = usetextCb()
const Flex81Props = useStore((state)=>state["Home"]["Flex81"]);
const Flex81IoProps = useIoStore((state)=>state["Home"]["Flex81"]);
const Flex81Cb = useFlex81Cb()
const Flex80Props = useStore((state)=>state["Home"]["Flex80"]);
const Flex80IoProps = useIoStore((state)=>state["Home"]["Flex80"]);
const Flex80Cb = useFlex80Cb()
const Flex344Props = useStore((state)=>state["Home"]["Flex344"]);
const Flex344IoProps = useIoStore((state)=>state["Home"]["Flex344"]);
const Flex344Cb = useFlex344Cb()
const Flex343Props = useStore((state)=>state["Home"]["Flex343"]);
const Flex343IoProps = useIoStore((state)=>state["Home"]["Flex343"]);
const Flex343Cb = useFlex343Cb()
const blog_sectionProps = useStore((state)=>state["Home"]["blog_section"]);
const blog_sectionIoProps = useIoStore((state)=>state["Home"]["blog_section"]);
const blog_sectionCb = useblog_sectionCb()
const blogsection_continerProps = useStore((state)=>state["Home"]["blogsection_continer"]);
const blogsection_continerIoProps = useIoStore((state)=>state["Home"]["blogsection_continer"]);
const blogsection_continerCb = useblogsection_continerCb()
const blogsProps = useStore((state)=>state["Home"]["blogs"]);
const blogsIoProps = useIoStore((state)=>state["Home"]["blogs"]);
const blogsCb = useblogsCb()
const blog_oneProps = useStore((state)=>state["Home"]["blog_one"]);
const blog_oneIoProps = useIoStore((state)=>state["Home"]["blog_one"]);
const blog_oneCb = useblog_oneCb()
const blog_twoProps = useStore((state)=>state["Home"]["blog_two"]);
const blog_twoIoProps = useIoStore((state)=>state["Home"]["blog_two"]);
const blog_twoCb = useblog_twoCb()
const blog_threeProps = useStore((state)=>state["Home"]["blog_three"]);
const blog_threeIoProps = useIoStore((state)=>state["Home"]["blog_three"]);
const blog_threeCb = useblog_threeCb()
const FOOTERProps = useStore((state)=>state["Home"]["FOOTER"]);
const FOOTERIoProps = useIoStore((state)=>state["Home"]["FOOTER"]);
const FOOTERCb = useFOOTERCb()
const footer_containerProps = useStore((state)=>state["Home"]["footer_container"]);
const footer_containerIoProps = useIoStore((state)=>state["Home"]["footer_container"]);
const footer_containerCb = usefooter_containerCb()
const topProps = useStore((state)=>state["Home"]["top"]);
const topIoProps = useIoStore((state)=>state["Home"]["top"]);
const topCb = usetopCb()
const Flex108Props = useStore((state)=>state["Home"]["Flex108"]);
const Flex108IoProps = useIoStore((state)=>state["Home"]["Flex108"]);
const Flex108Cb = useFlex108Cb()
const pages_footer_containerProps = useStore((state)=>state["Home"]["pages_footer_container"]);
const pages_footer_containerIoProps = useIoStore((state)=>state["Home"]["pages_footer_container"]);
const pages_footer_containerCb = usepages_footer_containerCb()
const Flex110Props = useStore((state)=>state["Home"]["Flex110"]);
const Flex110IoProps = useIoStore((state)=>state["Home"]["Flex110"]);
const Flex110Cb = useFlex110Cb()
const misc_footer_containerProps = useStore((state)=>state["Home"]["misc_footer_container"]);
const misc_footer_containerIoProps = useIoStore((state)=>state["Home"]["misc_footer_container"]);
const misc_footer_containerCb = usemisc_footer_containerCb()
const Flex113Props = useStore((state)=>state["Home"]["Flex113"]);
const Flex113IoProps = useIoStore((state)=>state["Home"]["Flex113"]);
const Flex113Cb = useFlex113Cb()
const social_footer_containerProps = useStore((state)=>state["Home"]["social_footer_container"]);
const social_footer_containerIoProps = useIoStore((state)=>state["Home"]["social_footer_container"]);
const social_footer_containerCb = usesocial_footer_containerCb()
const Flex115Props = useStore((state)=>state["Home"]["Flex115"]);
const Flex115IoProps = useIoStore((state)=>state["Home"]["Flex115"]);
const Flex115Cb = useFlex115Cb()
const conncet_social_containerProps = useStore((state)=>state["Home"]["conncet_social_container"]);
const conncet_social_containerIoProps = useIoStore((state)=>state["Home"]["conncet_social_container"]);
const conncet_social_containerCb = useconncet_social_containerCb()
const Flex117Props = useStore((state)=>state["Home"]["Flex117"]);
const Flex117IoProps = useIoStore((state)=>state["Home"]["Flex117"]);
const Flex117Cb = useFlex117Cb()
const bottomProps = useStore((state)=>state["Home"]["bottom"]);
const bottomIoProps = useIoStore((state)=>state["Home"]["bottom"]);
const bottomCb = usebottomCb()
const atrilabsProps = useStore((state)=>state["Home"]["atrilabs"]);
const atrilabsIoProps = useIoStore((state)=>state["Home"]["atrilabs"]);
const atrilabsCb = useatrilabsCb()
const online_payProps = useStore((state)=>state["Home"]["online_pay"]);
const online_payIoProps = useIoStore((state)=>state["Home"]["online_pay"]);
const online_payCb = useonline_payCb()
const images1Props = useStore((state)=>state["Home"]["images1"]);
const images1IoProps = useIoStore((state)=>state["Home"]["images1"]);
const images1Cb = useimages1Cb()
const Flex57Props = useStore((state)=>state["Home"]["Flex57"]);
const Flex57IoProps = useIoStore((state)=>state["Home"]["Flex57"]);
const Flex57Cb = useFlex57Cb()
const Flex56Props = useStore((state)=>state["Home"]["Flex56"]);
const Flex56IoProps = useIoStore((state)=>state["Home"]["Flex56"]);
const Flex56Cb = useFlex56Cb()
const Flex59Props = useStore((state)=>state["Home"]["Flex59"]);
const Flex59IoProps = useIoStore((state)=>state["Home"]["Flex59"]);
const Flex59Cb = useFlex59Cb()
const images_2Props = useStore((state)=>state["Home"]["images_2"]);
const images_2IoProps = useIoStore((state)=>state["Home"]["images_2"]);
const images_2Cb = useimages_2Cb()
const Flex336Props = useStore((state)=>state["Home"]["Flex336"]);
const Flex336IoProps = useIoStore((state)=>state["Home"]["Flex336"]);
const Flex336Cb = useFlex336Cb()
const Flex335Props = useStore((state)=>state["Home"]["Flex335"]);
const Flex335IoProps = useIoStore((state)=>state["Home"]["Flex335"]);
const Flex335Cb = useFlex335Cb()
const Flex334Props = useStore((state)=>state["Home"]["Flex334"]);
const Flex334IoProps = useIoStore((state)=>state["Home"]["Flex334"]);
const Flex334Cb = useFlex334Cb()
const images_3Props = useStore((state)=>state["Home"]["images_3"]);
const images_3IoProps = useIoStore((state)=>state["Home"]["images_3"]);
const images_3Cb = useimages_3Cb()
const Flex340Props = useStore((state)=>state["Home"]["Flex340"]);
const Flex340IoProps = useIoStore((state)=>state["Home"]["Flex340"]);
const Flex340Cb = useFlex340Cb()
const Flex339Props = useStore((state)=>state["Home"]["Flex339"]);
const Flex339IoProps = useIoStore((state)=>state["Home"]["Flex339"]);
const Flex339Cb = useFlex339Cb()
const Flex338Props = useStore((state)=>state["Home"]["Flex338"]);
const Flex338IoProps = useIoStore((state)=>state["Home"]["Flex338"]);
const Flex338Cb = useFlex338Cb()
const headline_textProps = useStore((state)=>state["Home"]["headline_text"]);
const headline_textIoProps = useIoStore((state)=>state["Home"]["headline_text"]);
const headline_textCb = useheadline_textCb()
const logoProps = useStore((state)=>state["Home"]["logo"]);
const logoIoProps = useIoStore((state)=>state["Home"]["logo"]);
const logoCb = uselogoCb()
const Image2Props = useStore((state)=>state["Home"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["Home"]["Image2"]);
const Image2Cb = useImage2Cb()
const Menu1Props = useStore((state)=>state["Home"]["Menu1"]);
const Menu1IoProps = useIoStore((state)=>state["Home"]["Menu1"]);
const Menu1Cb = useMenu1Cb()
const Image3Props = useStore((state)=>state["Home"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["Home"]["Image3"]);
const Image3Cb = useImage3Cb()
const TextBox11Props = useStore((state)=>state["Home"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Home"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const HomeProps = useStore((state)=>state["Home"]["Home"]);
const HomeIoProps = useIoStore((state)=>state["Home"]["Home"]);
const HomeCb = useHomeCb()
const PagesProps = useStore((state)=>state["Home"]["Pages"]);
const PagesIoProps = useIoStore((state)=>state["Home"]["Pages"]);
const PagesCb = usePagesCb()
const Dropdown3Props = useStore((state)=>state["Home"]["Dropdown3"]);
const Dropdown3IoProps = useIoStore((state)=>state["Home"]["Dropdown3"]);
const Dropdown3Cb = useDropdown3Cb()
const TextBox214Props = useStore((state)=>state["Home"]["TextBox214"]);
const TextBox214IoProps = useIoStore((state)=>state["Home"]["TextBox214"]);
const TextBox214Cb = useTextBox214Cb()
const Image5Props = useStore((state)=>state["Home"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["Home"]["Image5"]);
const Image5Cb = useImage5Cb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const TextBox13Props = useStore((state)=>state["Home"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Home"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const Button1Props = useStore((state)=>state["Home"]["Button1"]);
const Button1IoProps = useIoStore((state)=>state["Home"]["Button1"]);
const Button1Cb = useButton1Cb()
const Image8Props = useStore((state)=>state["Home"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["Home"]["Image8"]);
const Image8Cb = useImage8Cb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const TextBox22Props = useStore((state)=>state["Home"]["TextBox22"]);
const TextBox22IoProps = useIoStore((state)=>state["Home"]["TextBox22"]);
const TextBox22Cb = useTextBox22Cb()
const Image12Props = useStore((state)=>state["Home"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["Home"]["Image12"]);
const Image12Cb = useImage12Cb()
const TextBox23Props = useStore((state)=>state["Home"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["Home"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const Image13Props = useStore((state)=>state["Home"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Home"]["Image13"]);
const Image13Cb = useImage13Cb()
const Button4Props = useStore((state)=>state["Home"]["Button4"]);
const Button4IoProps = useIoStore((state)=>state["Home"]["Button4"]);
const Button4Cb = useButton4Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const FEATURESProps = useStore((state)=>state["Home"]["FEATURES"]);
const FEATURESIoProps = useIoStore((state)=>state["Home"]["FEATURES"]);
const FEATURESCb = useFEATURESCb()
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const Image14Props = useStore((state)=>state["Home"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["Home"]["Image14"]);
const Image14Cb = useImage14Cb()
const TextBox33Props = useStore((state)=>state["Home"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["Home"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const TextBox35Props = useStore((state)=>state["Home"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Home"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const TextBox38Props = useStore((state)=>state["Home"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Home"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const TextBox39Props = useStore((state)=>state["Home"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Home"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const google_rating_textProps = useStore((state)=>state["Home"]["google_rating_text"]);
const google_rating_textIoProps = useIoStore((state)=>state["Home"]["google_rating_text"]);
const google_rating_textCb = usegoogle_rating_textCb()
const Image19Props = useStore((state)=>state["Home"]["Image19"]);
const Image19IoProps = useIoStore((state)=>state["Home"]["Image19"]);
const Image19Cb = useImage19Cb()
const Image21Props = useStore((state)=>state["Home"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["Home"]["Image21"]);
const Image21Cb = useImage21Cb()
const Image22Props = useStore((state)=>state["Home"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["Home"]["Image22"]);
const Image22Cb = useImage22Cb()
const Image23Props = useStore((state)=>state["Home"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["Home"]["Image23"]);
const Image23Cb = useImage23Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const Image18Props = useStore((state)=>state["Home"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["Home"]["Image18"]);
const Image18Cb = useImage18Cb()
const TextBox41Props = useStore((state)=>state["Home"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Home"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const TextBox42Props = useStore((state)=>state["Home"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Home"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const TextBox68Props = useStore((state)=>state["Home"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["Home"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const Button8Props = useStore((state)=>state["Home"]["Button8"]);
const Button8IoProps = useIoStore((state)=>state["Home"]["Button8"]);
const Button8Cb = useButton8Cb()
const TangerineProps = useStore((state)=>state["Home"]["Tangerine"]);
const TangerineIoProps = useIoStore((state)=>state["Home"]["Tangerine"]);
const TangerineCb = useTangerineCb()
const TextBox70Props = useStore((state)=>state["Home"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["Home"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const Image29Props = useStore((state)=>state["Home"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["Home"]["Image29"]);
const Image29Cb = useImage29Cb()
const Image31Props = useStore((state)=>state["Home"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["Home"]["Image31"]);
const Image31Cb = useImage31Cb()
const TextBox74Props = useStore((state)=>state["Home"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["Home"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const TextBox75Props = useStore((state)=>state["Home"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["Home"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const Image147Props = useStore((state)=>state["Home"]["Image147"]);
const Image147IoProps = useIoStore((state)=>state["Home"]["Image147"]);
const Image147Cb = useImage147Cb()
const TextBox403Props = useStore((state)=>state["Home"]["TextBox403"]);
const TextBox403IoProps = useIoStore((state)=>state["Home"]["TextBox403"]);
const TextBox403Cb = useTextBox403Cb()
const TextBox404Props = useStore((state)=>state["Home"]["TextBox404"]);
const TextBox404IoProps = useIoStore((state)=>state["Home"]["TextBox404"]);
const TextBox404Cb = useTextBox404Cb()
const Button9Props = useStore((state)=>state["Home"]["Button9"]);
const Button9IoProps = useIoStore((state)=>state["Home"]["Button9"]);
const Button9Cb = useButton9Cb()
const TextBox76Props = useStore((state)=>state["Home"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["Home"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const TextBox77Props = useStore((state)=>state["Home"]["TextBox77"]);
const TextBox77IoProps = useIoStore((state)=>state["Home"]["TextBox77"]);
const TextBox77Cb = useTextBox77Cb()
const TextBox83Props = useStore((state)=>state["Home"]["TextBox83"]);
const TextBox83IoProps = useIoStore((state)=>state["Home"]["TextBox83"]);
const TextBox83Cb = useTextBox83Cb()
const Div6Props = useStore((state)=>state["Home"]["Div6"]);
const Div6IoProps = useIoStore((state)=>state["Home"]["Div6"]);
const Div6Cb = useDiv6Cb()
const Div7Props = useStore((state)=>state["Home"]["Div7"]);
const Div7IoProps = useIoStore((state)=>state["Home"]["Div7"]);
const Div7Cb = useDiv7Cb()
const TextBox102Props = useStore((state)=>state["Home"]["TextBox102"]);
const TextBox102IoProps = useIoStore((state)=>state["Home"]["TextBox102"]);
const TextBox102Cb = useTextBox102Cb()
const TextBox103Props = useStore((state)=>state["Home"]["TextBox103"]);
const TextBox103IoProps = useIoStore((state)=>state["Home"]["TextBox103"]);
const TextBox103Cb = useTextBox103Cb()
const TextBox104Props = useStore((state)=>state["Home"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["Home"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()
const Div8Props = useStore((state)=>state["Home"]["Div8"]);
const Div8IoProps = useIoStore((state)=>state["Home"]["Div8"]);
const Div8Cb = useDiv8Cb()
const TextBox105Props = useStore((state)=>state["Home"]["TextBox105"]);
const TextBox105IoProps = useIoStore((state)=>state["Home"]["TextBox105"]);
const TextBox105Cb = useTextBox105Cb()
const TextBox106Props = useStore((state)=>state["Home"]["TextBox106"]);
const TextBox106IoProps = useIoStore((state)=>state["Home"]["TextBox106"]);
const TextBox106Cb = useTextBox106Cb()
const TextBox107Props = useStore((state)=>state["Home"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["Home"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()
const Image44Props = useStore((state)=>state["Home"]["Image44"]);
const Image44IoProps = useIoStore((state)=>state["Home"]["Image44"]);
const Image44Cb = useImage44Cb()
const TextBox117Props = useStore((state)=>state["Home"]["TextBox117"]);
const TextBox117IoProps = useIoStore((state)=>state["Home"]["TextBox117"]);
const TextBox117Cb = useTextBox117Cb()
const TextBox118Props = useStore((state)=>state["Home"]["TextBox118"]);
const TextBox118IoProps = useIoStore((state)=>state["Home"]["TextBox118"]);
const TextBox118Cb = useTextBox118Cb()
const TextBox119Props = useStore((state)=>state["Home"]["TextBox119"]);
const TextBox119IoProps = useIoStore((state)=>state["Home"]["TextBox119"]);
const TextBox119Cb = useTextBox119Cb()
const TextBox120Props = useStore((state)=>state["Home"]["TextBox120"]);
const TextBox120IoProps = useIoStore((state)=>state["Home"]["TextBox120"]);
const TextBox120Cb = useTextBox120Cb()
const TextBox121Props = useStore((state)=>state["Home"]["TextBox121"]);
const TextBox121IoProps = useIoStore((state)=>state["Home"]["TextBox121"]);
const TextBox121Cb = useTextBox121Cb()
const TextBox122Props = useStore((state)=>state["Home"]["TextBox122"]);
const TextBox122IoProps = useIoStore((state)=>state["Home"]["TextBox122"]);
const TextBox122Cb = useTextBox122Cb()
const TextBox134Props = useStore((state)=>state["Home"]["TextBox134"]);
const TextBox134IoProps = useIoStore((state)=>state["Home"]["TextBox134"]);
const TextBox134Cb = useTextBox134Cb()
const TextBox129Props = useStore((state)=>state["Home"]["TextBox129"]);
const TextBox129IoProps = useIoStore((state)=>state["Home"]["TextBox129"]);
const TextBox129Cb = useTextBox129Cb()
const TextBox130Props = useStore((state)=>state["Home"]["TextBox130"]);
const TextBox130IoProps = useIoStore((state)=>state["Home"]["TextBox130"]);
const TextBox130Cb = useTextBox130Cb()
const TextBox131Props = useStore((state)=>state["Home"]["TextBox131"]);
const TextBox131IoProps = useIoStore((state)=>state["Home"]["TextBox131"]);
const TextBox131Cb = useTextBox131Cb()
const TextBox132Props = useStore((state)=>state["Home"]["TextBox132"]);
const TextBox132IoProps = useIoStore((state)=>state["Home"]["TextBox132"]);
const TextBox132Cb = useTextBox132Cb()
const TextBox133Props = useStore((state)=>state["Home"]["TextBox133"]);
const TextBox133IoProps = useIoStore((state)=>state["Home"]["TextBox133"]);
const TextBox133Cb = useTextBox133Cb()
const TextBox140Props = useStore((state)=>state["Home"]["TextBox140"]);
const TextBox140IoProps = useIoStore((state)=>state["Home"]["TextBox140"]);
const TextBox140Cb = useTextBox140Cb()
const TextBox136Props = useStore((state)=>state["Home"]["TextBox136"]);
const TextBox136IoProps = useIoStore((state)=>state["Home"]["TextBox136"]);
const TextBox136Cb = useTextBox136Cb()
const TextBox137Props = useStore((state)=>state["Home"]["TextBox137"]);
const TextBox137IoProps = useIoStore((state)=>state["Home"]["TextBox137"]);
const TextBox137Cb = useTextBox137Cb()
const TextBox138Props = useStore((state)=>state["Home"]["TextBox138"]);
const TextBox138IoProps = useIoStore((state)=>state["Home"]["TextBox138"]);
const TextBox138Cb = useTextBox138Cb()
const TextBox139Props = useStore((state)=>state["Home"]["TextBox139"]);
const TextBox139IoProps = useIoStore((state)=>state["Home"]["TextBox139"]);
const TextBox139Cb = useTextBox139Cb()
const TextBox146Props = useStore((state)=>state["Home"]["TextBox146"]);
const TextBox146IoProps = useIoStore((state)=>state["Home"]["TextBox146"]);
const TextBox146Cb = useTextBox146Cb()
const TextBox141Props = useStore((state)=>state["Home"]["TextBox141"]);
const TextBox141IoProps = useIoStore((state)=>state["Home"]["TextBox141"]);
const TextBox141Cb = useTextBox141Cb()
const TextBox142Props = useStore((state)=>state["Home"]["TextBox142"]);
const TextBox142IoProps = useIoStore((state)=>state["Home"]["TextBox142"]);
const TextBox142Cb = useTextBox142Cb()
const TextBox143Props = useStore((state)=>state["Home"]["TextBox143"]);
const TextBox143IoProps = useIoStore((state)=>state["Home"]["TextBox143"]);
const TextBox143Cb = useTextBox143Cb()
const TextBox147Props = useStore((state)=>state["Home"]["TextBox147"]);
const TextBox147IoProps = useIoStore((state)=>state["Home"]["TextBox147"]);
const TextBox147Cb = useTextBox147Cb()
const TextBox148Props = useStore((state)=>state["Home"]["TextBox148"]);
const TextBox148IoProps = useIoStore((state)=>state["Home"]["TextBox148"]);
const TextBox148Cb = useTextBox148Cb()
const Image45Props = useStore((state)=>state["Home"]["Image45"]);
const Image45IoProps = useIoStore((state)=>state["Home"]["Image45"]);
const Image45Cb = useImage45Cb()
const Image46Props = useStore((state)=>state["Home"]["Image46"]);
const Image46IoProps = useIoStore((state)=>state["Home"]["Image46"]);
const Image46Cb = useImage46Cb()
const Image47Props = useStore((state)=>state["Home"]["Image47"]);
const Image47IoProps = useIoStore((state)=>state["Home"]["Image47"]);
const Image47Cb = useImage47Cb()
const Image26Props = useStore((state)=>state["Home"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["Home"]["Image26"]);
const Image26Cb = useImage26Cb()
const TextBox51Props = useStore((state)=>state["Home"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["Home"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const TextBox52Props = useStore((state)=>state["Home"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Home"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const numberProps = useStore((state)=>state["Home"]["number"]);
const numberIoProps = useIoStore((state)=>state["Home"]["number"]);
const numberCb = usenumberCb()
const TextBox59Props = useStore((state)=>state["Home"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Home"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const Image144Props = useStore((state)=>state["Home"]["Image144"]);
const Image144IoProps = useIoStore((state)=>state["Home"]["Image144"]);
const Image144Cb = useImage144Cb()
const TextBox395Props = useStore((state)=>state["Home"]["TextBox395"]);
const TextBox395IoProps = useIoStore((state)=>state["Home"]["TextBox395"]);
const TextBox395Cb = useTextBox395Cb()
const TextBox396Props = useStore((state)=>state["Home"]["TextBox396"]);
const TextBox396IoProps = useIoStore((state)=>state["Home"]["TextBox396"]);
const TextBox396Cb = useTextBox396Cb()
const TextBox393Props = useStore((state)=>state["Home"]["TextBox393"]);
const TextBox393IoProps = useIoStore((state)=>state["Home"]["TextBox393"]);
const TextBox393Cb = useTextBox393Cb()
const TextBox394Props = useStore((state)=>state["Home"]["TextBox394"]);
const TextBox394IoProps = useIoStore((state)=>state["Home"]["TextBox394"]);
const TextBox394Cb = useTextBox394Cb()
const Image145Props = useStore((state)=>state["Home"]["Image145"]);
const Image145IoProps = useIoStore((state)=>state["Home"]["Image145"]);
const Image145Cb = useImage145Cb()
const TextBox399Props = useStore((state)=>state["Home"]["TextBox399"]);
const TextBox399IoProps = useIoStore((state)=>state["Home"]["TextBox399"]);
const TextBox399Cb = useTextBox399Cb()
const TextBox400Props = useStore((state)=>state["Home"]["TextBox400"]);
const TextBox400IoProps = useIoStore((state)=>state["Home"]["TextBox400"]);
const TextBox400Cb = useTextBox400Cb()
const TextBox397Props = useStore((state)=>state["Home"]["TextBox397"]);
const TextBox397IoProps = useIoStore((state)=>state["Home"]["TextBox397"]);
const TextBox397Cb = useTextBox397Cb()
const TextBox398Props = useStore((state)=>state["Home"]["TextBox398"]);
const TextBox398IoProps = useIoStore((state)=>state["Home"]["TextBox398"]);
const TextBox398Cb = useTextBox398Cb()

  return (<>
  <Flex className="p-Home Headline bpt" {...HeadlineProps} {...HeadlineCb} {...HeadlineIoProps}>
<TextBox className="p-Home headline_text bpt" {...headline_textProps} {...headline_textCb} {...headline_textIoProps}/>
</Flex>
<Flex className="p-Home Navbar_Container bpt" {...Navbar_ContainerProps} {...Navbar_ContainerCb} {...Navbar_ContainerIoProps}>
<Flex className="p-Home Nav_elements bpt" {...Nav_elementsProps} {...Nav_elementsCb} {...Nav_elementsIoProps}>
<Flex className="p-Home navlinks bpt" {...navlinksProps} {...navlinksCb} {...navlinksIoProps}>
<TextBox className="p-Home Home bpt" {...HomeProps} {...HomeCb} {...HomeIoProps}/>
<TextBox className="p-Home TextBox214 bpt" {...TextBox214Props} {...TextBox214Cb} {...TextBox214IoProps}/>
<Dropdown className="p-Home Pages bpt" {...PagesProps} {...PagesCb} {...PagesIoProps}/>
<Dropdown className="p-Home Dropdown3 bpt" {...Dropdown3Props} {...Dropdown3Cb} {...Dropdown3IoProps}/>
</Flex>
<Image className="p-Home logo bpt" {...logoProps} {...logoCb} {...logoIoProps}/>
<Flex className="p-Home right bpt" {...rightProps} {...rightCb} {...rightIoProps}>
<Image className="p-Home Image2 bpt" {...Image2Props} {...Image2Cb} {...Image2IoProps}/>
<Flex className="p-Home cart bpt" {...cartProps} {...cartCb} {...cartIoProps}>
<Image className="p-Home Image3 bpt" {...Image3Props} {...Image3Cb} {...Image3IoProps}/>
<TextBox className="p-Home TextBox11 bpt" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
</Flex>
<Menu className="p-Home Menu1 bpt" {...Menu1Props} {...Menu1Cb} {...Menu1IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home home_view1 bpt" {...home_view1Props} {...home_view1Cb} {...home_view1IoProps}>
<Flex className="p-Home body_container bpt" {...body_containerProps} {...body_containerCb} {...body_containerIoProps}>
<Flex className="p-Home body bpt" {...bodyProps} {...bodyCb} {...bodyIoProps}>
<Flex className="p-Home left bpt" {...leftProps} {...leftCb} {...leftIoProps}>
<TextBox className="p-Home TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
<TextBox className="p-Home TextBox13 bpt" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
<TextBox className="p-Home TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
<Button className="p-Home Button1 bpt" {...Button1Props} {...Button1Cb} {...Button1IoProps}/>
</Flex>
<Image className="p-Home Image5 bpt" {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home home_view2 bpt" {...home_view2Props} {...home_view2Cb} {...home_view2IoProps}>
<Flex className="p-Home homeview2_container bpt" {...homeview2_containerProps} {...homeview2_containerCb} {...homeview2_containerIoProps}>
<Flex className="p-Home headlines2 bpt" {...headlines2Props} {...headlines2Cb} {...headlines2IoProps}>
<Flex className="p-Home dualsport bpt" {...dualsportProps} {...dualsportCb} {...dualsportIoProps}>
<Image className="p-Home Image8 bpt" {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
<TextBox className="p-Home TextBox21 bpt" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
</Flex>
<Flex className="p-Home freetest bpt" {...freetestProps} {...freetestCb} {...freetestIoProps}>
<Image className="p-Home Image12 bpt" {...Image12Props} {...Image12Cb} {...Image12IoProps}/>
<TextBox className="p-Home TextBox22 bpt" {...TextBox22Props} {...TextBox22Cb} {...TextBox22IoProps}/>
</Flex>
<Flex className="p-Home freespin bpt" {...freespinProps} {...freespinCb} {...freespinIoProps}>
<Image className="p-Home Image13 bpt" {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
<TextBox className="p-Home TextBox23 bpt" {...TextBox23Props} {...TextBox23Cb} {...TextBox23IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home body_view2 bpt" {...body_view2Props} {...body_view2Cb} {...body_view2IoProps}>
<Flex className="p-Home helemtsbody bpt" {...helemtsbodyProps} {...helemtsbodyCb} {...helemtsbodyIoProps}>
<TextBox className="p-Home TextBox28 bpt" {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
<TextBox className="p-Home TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
<Button className="p-Home Button4 bpt" {...Button4Props} {...Button4Cb} {...Button4IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home features bpt" {...featuresProps} {...featuresCb} {...featuresIoProps}>
<Flex className="p-Home features_container bpt" {...features_containerProps} {...features_containerCb} {...features_containerIoProps}>
<TextBox className="p-Home FEATURES bpt" {...FEATURESProps} {...FEATURESCb} {...FEATURESIoProps}/>
<TextBox className="p-Home TextBox30 bpt" {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
<Flex className="p-Home features_list_container bpt" {...features_list_containerProps} {...features_list_containerCb} {...features_list_containerIoProps}>
<Flex className="p-Home Flex38 bpt" {...Flex38Props} {...Flex38Cb} {...Flex38IoProps}>
<Image className="p-Home Image14 bpt" {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
<TextBox className="p-Home TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
<TextBox className="p-Home TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
</Flex>
<Flex className="p-Home Flex41 bpt" {...Flex41Props} {...Flex41Cb} {...Flex41IoProps}>
<Image className="p-Home Image16 bpt" {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
<TextBox className="p-Home TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
<TextBox className="p-Home TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
</Flex>
<Flex className="p-Home Flex42 bpt" {...Flex42Props} {...Flex42Cb} {...Flex42IoProps}>
<Image className="p-Home Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
<TextBox className="p-Home TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
<TextBox className="p-Home TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home pro_choic bpt" {...pro_choicProps} {...pro_choicCb} {...pro_choicIoProps}>
<Flex className="p-Home Flex44 bpt" {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<Flex className="p-Home prochoice_left bpt" {...prochoice_leftProps} {...prochoice_leftCb} {...prochoice_leftIoProps}>
<TextBox className="p-Home TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
<TextBox className="p-Home TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
<Flex className="p-Home rating_icons bpt" {...rating_iconsProps} {...rating_iconsCb} {...rating_iconsIoProps}>
<Image className="p-Home Image19 bpt" {...Image19Props} {...Image19Cb} {...Image19IoProps}/>
<Image className="p-Home Image21 bpt" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
<Image className="p-Home Image22 bpt" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
<Image className="p-Home Image23 bpt" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
<Image className="p-Home Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
</Flex>
<TextBox className="p-Home google_rating_text bpt" {...google_rating_textProps} {...google_rating_textCb} {...google_rating_textIoProps}/>
</Flex>
<Flex className="p-Home prochoice_right bpt" {...prochoice_rightProps} {...prochoice_rightCb} {...prochoice_rightIoProps}>
<Image className="p-Home Image18 bpt" {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
<Flex className="p-Home Flex47 bpt" {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<TextBox className="p-Home TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
<TextBox className="p-Home TextBox41 bpt" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home images1 bpt" {...images1Props} {...images1Cb} {...images1IoProps}>
<Flex className="p-Home Flex57 bpt" {...Flex57Props} {...Flex57Cb} {...Flex57IoProps}>
<Image className="p-Home Image26 bpt" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
<Flex className="p-Home Flex56 bpt" {...Flex56Props} {...Flex56Cb} {...Flex56IoProps}>
<Flex className="p-Home Flex59 bpt" {...Flex59Props} {...Flex59Cb} {...Flex59IoProps}>
<TextBox className="p-Home number bpt" {...numberProps} {...numberCb} {...numberIoProps}/>
<TextBox className="p-Home TextBox59 bpt" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
</Flex>
<TextBox className="p-Home TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
<TextBox className="p-Home TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home images_2 bpt" {...images_2Props} {...images_2Cb} {...images_2IoProps}>
<Flex className="p-Home Flex336 bpt" {...Flex336Props} {...Flex336Cb} {...Flex336IoProps}>
<Image className="p-Home Image144 bpt" {...Image144Props} {...Image144Cb} {...Image144IoProps}/>
<Flex className="p-Home Flex335 bpt" {...Flex335Props} {...Flex335Cb} {...Flex335IoProps}>
<Flex className="p-Home Flex334 bpt" {...Flex334Props} {...Flex334Cb} {...Flex334IoProps}>
<TextBox className="p-Home TextBox394 bpt" {...TextBox394Props} {...TextBox394Cb} {...TextBox394IoProps}/>
<TextBox className="p-Home TextBox393 bpt" {...TextBox393Props} {...TextBox393Cb} {...TextBox393IoProps}/>
</Flex>
<TextBox className="p-Home TextBox395 bpt" {...TextBox395Props} {...TextBox395Cb} {...TextBox395IoProps}/>
<TextBox className="p-Home TextBox396 bpt" {...TextBox396Props} {...TextBox396Cb} {...TextBox396IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home images_3 bpt" {...images_3Props} {...images_3Cb} {...images_3IoProps}>
<Flex className="p-Home Flex340 bpt" {...Flex340Props} {...Flex340Cb} {...Flex340IoProps}>
<Image className="p-Home Image145 bpt" {...Image145Props} {...Image145Cb} {...Image145IoProps}/>
<Flex className="p-Home Flex339 bpt" {...Flex339Props} {...Flex339Cb} {...Flex339IoProps}>
<Flex className="p-Home Flex338 bpt" {...Flex338Props} {...Flex338Cb} {...Flex338IoProps}>
<TextBox className="p-Home TextBox397 bpt" {...TextBox397Props} {...TextBox397Cb} {...TextBox397IoProps}/>
<TextBox className="p-Home TextBox398 bpt" {...TextBox398Props} {...TextBox398Cb} {...TextBox398IoProps}/>
</Flex>
<TextBox className="p-Home TextBox400 bpt" {...TextBox400Props} {...TextBox400Cb} {...TextBox400IoProps}/>
<TextBox className="p-Home TextBox399 bpt" {...TextBox399Props} {...TextBox399Cb} {...TextBox399IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home shop_section_container bpt" {...shop_section_containerProps} {...shop_section_containerCb} {...shop_section_containerIoProps}>
<Flex className="p-Home shop_section bpt" {...shop_sectionProps} {...shop_sectionCb} {...shop_sectionIoProps}>
<TextBox className="p-Home TextBox68 bpt" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
<Flex className="p-Home items_container bpt" {...items_containerProps} {...items_containerCb} {...items_containerIoProps}>
<Flex className="p-Home item_1 bpt" {...item_1Props} {...item_1Cb} {...item_1IoProps}>
<Flex className="p-Home text bpt" {...textProps} {...textCb} {...textIoProps}>
<Image className="p-Home Image29 bpt" {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
<TextBox className="p-Home Tangerine bpt" {...TangerineProps} {...TangerineCb} {...TangerineIoProps}/>
<TextBox className="p-Home TextBox70 bpt" {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex344 bpt" {...Flex344Props} {...Flex344Cb} {...Flex344IoProps}>
<Flex className="p-Home Flex343 bpt" {...Flex343Props} {...Flex343Cb} {...Flex343IoProps}>
<Image className="p-Home Image147 bpt" {...Image147Props} {...Image147Cb} {...Image147IoProps}/>
<TextBox className="p-Home TextBox404 bpt" {...TextBox404Props} {...TextBox404Cb} {...TextBox404IoProps}/>
<TextBox className="p-Home TextBox403 bpt" {...TextBox403Props} {...TextBox403Cb} {...TextBox403IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex81 bpt" {...Flex81Props} {...Flex81Cb} {...Flex81IoProps}>
<Flex className="p-Home Flex80 bpt" {...Flex80Props} {...Flex80Cb} {...Flex80IoProps}>
<Image className="p-Home Image31 bpt" {...Image31Props} {...Image31Cb} {...Image31IoProps}/>
<TextBox className="p-Home TextBox75 bpt" {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
<TextBox className="p-Home TextBox74 bpt" {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
</Flex>
</Flex>
</Flex>
<Button className="p-Home Button8 bpt" {...Button8Props} {...Button8Cb} {...Button8IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home blog_section bpt" {...blog_sectionProps} {...blog_sectionCb} {...blog_sectionIoProps}>
<Flex className="p-Home blogsection_continer bpt" {...blogsection_continerProps} {...blogsection_continerCb} {...blogsection_continerIoProps}>
<Flex className="p-Home blogs bpt" {...blogsProps} {...blogsCb} {...blogsIoProps}>
<Flex className="p-Home blog_one bpt" {...blog_oneProps} {...blog_oneCb} {...blog_oneIoProps}>
<Div className="p-Home Div6 bpt" {...Div6Props} {...Div6Cb} {...Div6IoProps}/>
<TextBox className="p-Home TextBox83 bpt" {...TextBox83Props} {...TextBox83Cb} {...TextBox83IoProps}/>
<TextBox className="p-Home TextBox76 bpt" {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
<TextBox className="p-Home TextBox77 bpt" {...TextBox77Props} {...TextBox77Cb} {...TextBox77IoProps}/>
</Flex>
<Flex className="p-Home blog_two bpt" {...blog_twoProps} {...blog_twoCb} {...blog_twoIoProps}>
<Div className="p-Home Div7 bpt" {...Div7Props} {...Div7Cb} {...Div7IoProps}/>
<TextBox className="p-Home TextBox102 bpt" {...TextBox102Props} {...TextBox102Cb} {...TextBox102IoProps}/>
<TextBox className="p-Home TextBox104 bpt" {...TextBox104Props} {...TextBox104Cb} {...TextBox104IoProps}/>
<TextBox className="p-Home TextBox103 bpt" {...TextBox103Props} {...TextBox103Cb} {...TextBox103IoProps}/>
</Flex>
<Flex className="p-Home blog_three bpt" {...blog_threeProps} {...blog_threeCb} {...blog_threeIoProps}>
<Div className="p-Home Div8 bpt" {...Div8Props} {...Div8Cb} {...Div8IoProps}/>
<TextBox className="p-Home TextBox105 bpt" {...TextBox105Props} {...TextBox105Cb} {...TextBox105IoProps}/>
<TextBox className="p-Home TextBox107 bpt" {...TextBox107Props} {...TextBox107Cb} {...TextBox107IoProps}/>
<TextBox className="p-Home TextBox106 bpt" {...TextBox106Props} {...TextBox106Cb} {...TextBox106IoProps}/>
</Flex>
</Flex>
<Button className="p-Home Button9 bpt" {...Button9Props} {...Button9Cb} {...Button9IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home FOOTER bpt" {...FOOTERProps} {...FOOTERCb} {...FOOTERIoProps}>
<Flex className="p-Home footer_container bpt" {...footer_containerProps} {...footer_containerCb} {...footer_containerIoProps}>
<Flex className="p-Home top bpt" {...topProps} {...topCb} {...topIoProps}>
<Image className="p-Home Image44 bpt" {...Image44Props} {...Image44Cb} {...Image44IoProps}/>
<Flex className="p-Home Flex108 bpt" {...Flex108Props} {...Flex108Cb} {...Flex108IoProps}>
<Flex className="p-Home pages_footer_container bpt" {...pages_footer_containerProps} {...pages_footer_containerCb} {...pages_footer_containerIoProps}>
<TextBox className="p-Home TextBox117 bpt" {...TextBox117Props} {...TextBox117Cb} {...TextBox117IoProps}/>
<Flex className="p-Home Flex110 bpt" {...Flex110Props} {...Flex110Cb} {...Flex110IoProps}>
<TextBox className="p-Home TextBox118 bpt" {...TextBox118Props} {...TextBox118Cb} {...TextBox118IoProps}/>
<TextBox className="p-Home TextBox119 bpt" {...TextBox119Props} {...TextBox119Cb} {...TextBox119IoProps}/>
<TextBox className="p-Home TextBox120 bpt" {...TextBox120Props} {...TextBox120Cb} {...TextBox120IoProps}/>
<TextBox className="p-Home TextBox121 bpt" {...TextBox121Props} {...TextBox121Cb} {...TextBox121IoProps}/>
<TextBox className="p-Home TextBox122 bpt" {...TextBox122Props} {...TextBox122Cb} {...TextBox122IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home misc_footer_container bpt" {...misc_footer_containerProps} {...misc_footer_containerCb} {...misc_footer_containerIoProps}>
<TextBox className="p-Home TextBox134 bpt" {...TextBox134Props} {...TextBox134Cb} {...TextBox134IoProps}/>
<Flex className="p-Home Flex113 bpt" {...Flex113Props} {...Flex113Cb} {...Flex113IoProps}>
<TextBox className="p-Home TextBox133 bpt" {...TextBox133Props} {...TextBox133Cb} {...TextBox133IoProps}/>
<TextBox className="p-Home TextBox132 bpt" {...TextBox132Props} {...TextBox132Cb} {...TextBox132IoProps}/>
<TextBox className="p-Home TextBox131 bpt" {...TextBox131Props} {...TextBox131Cb} {...TextBox131IoProps}/>
<TextBox className="p-Home TextBox130 bpt" {...TextBox130Props} {...TextBox130Cb} {...TextBox130IoProps}/>
<TextBox className="p-Home TextBox129 bpt" {...TextBox129Props} {...TextBox129Cb} {...TextBox129IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home social_footer_container bpt" {...social_footer_containerProps} {...social_footer_containerCb} {...social_footer_containerIoProps}>
<TextBox className="p-Home TextBox140 bpt" {...TextBox140Props} {...TextBox140Cb} {...TextBox140IoProps}/>
<Flex className="p-Home Flex115 bpt" {...Flex115Props} {...Flex115Cb} {...Flex115IoProps}>
<TextBox className="p-Home TextBox139 bpt" {...TextBox139Props} {...TextBox139Cb} {...TextBox139IoProps}/>
<TextBox className="p-Home TextBox138 bpt" {...TextBox138Props} {...TextBox138Cb} {...TextBox138IoProps}/>
<TextBox className="p-Home TextBox137 bpt" {...TextBox137Props} {...TextBox137Cb} {...TextBox137IoProps}/>
<TextBox className="p-Home TextBox136 bpt" {...TextBox136Props} {...TextBox136Cb} {...TextBox136IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home conncet_social_container bpt" {...conncet_social_containerProps} {...conncet_social_containerCb} {...conncet_social_containerIoProps}>
<TextBox className="p-Home TextBox146 bpt" {...TextBox146Props} {...TextBox146Cb} {...TextBox146IoProps}/>
<Flex className="p-Home Flex117 bpt" {...Flex117Props} {...Flex117Cb} {...Flex117IoProps}>
<TextBox className="p-Home TextBox141 bpt" {...TextBox141Props} {...TextBox141Cb} {...TextBox141IoProps}/>
<TextBox className="p-Home TextBox142 bpt" {...TextBox142Props} {...TextBox142Cb} {...TextBox142IoProps}/>
<TextBox className="p-Home TextBox143 bpt" {...TextBox143Props} {...TextBox143Cb} {...TextBox143IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home bottom bpt" {...bottomProps} {...bottomCb} {...bottomIoProps}>
<Flex className="p-Home atrilabs bpt" {...atrilabsProps} {...atrilabsCb} {...atrilabsIoProps}>
<TextBox className="p-Home TextBox147 bpt" {...TextBox147Props} {...TextBox147Cb} {...TextBox147IoProps}/>
<TextBox className="p-Home TextBox148 bpt" {...TextBox148Props} {...TextBox148Cb} {...TextBox148IoProps}/>
</Flex>
<Flex className="p-Home online_pay bpt" {...online_payProps} {...online_payCb} {...online_payIoProps}>
<Image className="p-Home Image45 bpt" {...Image45Props} {...Image45Cb} {...Image45IoProps}/>
<Image className="p-Home Image46 bpt" {...Image46Props} {...Image46Cb} {...Image46IoProps}/>
<Image className="p-Home Image47 bpt" {...Image47Props} {...Image47Cb} {...Image47IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
  </>);
}
