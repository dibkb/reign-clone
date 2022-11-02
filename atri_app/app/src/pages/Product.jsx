import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Dropdown as Dropdown2 } from "@atrilabs/react-component-manifests/src/manifests/Dropdown/Dropdown.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useheadlineCb, usenavbarCb, useFlex196Cb, useFlex194Cb, useFlex193Cb, useFlex195Cb, useItem_infoCb, useFlex202Cb, useFlex201Cb, useFlex200Cb, useCartCb, useQuantityCb, usefeatures_containerCb, useFlex227Cb, useFlex226Cb, useFlex223Cb, useFlex224Cb, useFlex225Cb, usecommom_containerCb, useFlex242Cb, useFlex241Cb, useFlex238Cb, useFlex239Cb, useFlex240Cb, usereviewsCb, useFlex254Cb, useFlex253Cb, useFlex250Cb, useFlex256Cb, useFlex258Cb, useFlex257Cb, useFlex260Cb, useFlex259Cb, useFlex262Cb, useFlex261Cb, useFlex270Cb, useFlex269Cb, useFlex268Cb, useFlex264Cb, useFlex265Cb, useFlex266Cb, useshop_sectionCb, useFlex278Cb, useFlex277Cb, useFlex274Cb, useFlex271Cb, useFlex275Cb, useFlex272Cb, useFlex276Cb, useFlex273Cb, useFooterCb, useFlex293Cb, useFlex291Cb, useFlex288Cb, useFlex289Cb, useFlex292Cb, useFlex290Cb, useFlex284Cb, useFlex280Cb, useFlex285Cb, useFlex281Cb, useFlex286Cb, useFlex282Cb, useFlex287Cb, useFlex283Cb, usenewsletterCb, useFlex323Cb, useFlex322Cb, useFlex325Cb, useTextBox210Cb, useImage81Cb, useImage80Cb, useTextBox211Cb, useImage79Cb, useDropdown14Cb, useDropdown15Cb, useTextBox212Cb, useTextBox213Cb, useImage82Cb, useTextBox218Cb, useTextBox219Cb, useTextBox220Cb, useTextBox221Cb, useTextBox222Cb, useDropdown17Cb, useButton15Cb, useTextBox226Cb, useInput1Cb, useTextBox256Cb, useImage92Cb, useTextBox257Cb, useTextBox258Cb, useImage93Cb, useTextBox259Cb, useTextBox260Cb, useImage94Cb, useTextBox261Cb, useTextBox281Cb, useTextBox275Cb, useTextBox276Cb, useTextBox277Cb, useTextBox278Cb, useTextBox279Cb, useTextBox280Cb, useTextBox295Cb, useTextBox289Cb, useTextBox290Cb, useImage104Cb, useImage105Cb, useImage106Cb, useImage107Cb, useImage108Cb, useTextBox296Cb, useTextBox297Cb, useImage109Cb, useImage110Cb, useImage111Cb, useImage112Cb, useImage113Cb, useTextBox298Cb, useTextBox299Cb, useImage114Cb, useImage115Cb, useImage116Cb, useImage117Cb, useImage118Cb, useTextBox300Cb, useTextBox301Cb, useImage119Cb, useImage120Cb, useImage121Cb, useImage122Cb, useImage123Cb, useImage124Cb, useTextBox304Cb, useImage125Cb, useTextBox305Cb, useTextBox306Cb, useImage126Cb, useButton17Cb, useTextBox313Cb, useTextBox307Cb, useTextBox308Cb, useImage127Cb, useTextBox309Cb, useTextBox310Cb, useImage128Cb, useImage129Cb, useTextBox311Cb, useTextBox312Cb, useImage130Cb, useImage131Cb, useImage132Cb, useTextBox335Cb, useTextBox336Cb, useImage133Cb, useTextBox331Cb, useTextBox314Cb, useTextBox315Cb, useTextBox316Cb, useTextBox332Cb, useTextBox317Cb, useTextBox318Cb, useTextBox319Cb, useTextBox320Cb, useTextBox333Cb, useTextBox321Cb, useTextBox322Cb, useTextBox323Cb, useTextBox324Cb, useTextBox325Cb, useTextBox334Cb, useTextBox326Cb, useTextBox327Cb, useTextBox328Cb, useTextBox329Cb, useTextBox330Cb, useTextBox383Cb, useTextBox384Cb, useInput3Cb, useButton18Cb } from "../page-cbs/Product";
import "../page-css/Product.css";
import "../custom/Product";

export default function Product() {
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

  const headlineProps = useStore((state)=>state["Product"]["headline"]);
const headlineIoProps = useIoStore((state)=>state["Product"]["headline"]);
const headlineCb = useheadlineCb()
const navbarProps = useStore((state)=>state["Product"]["navbar"]);
const navbarIoProps = useIoStore((state)=>state["Product"]["navbar"]);
const navbarCb = usenavbarCb()
const Flex196Props = useStore((state)=>state["Product"]["Flex196"]);
const Flex196IoProps = useIoStore((state)=>state["Product"]["Flex196"]);
const Flex196Cb = useFlex196Cb()
const Flex194Props = useStore((state)=>state["Product"]["Flex194"]);
const Flex194IoProps = useIoStore((state)=>state["Product"]["Flex194"]);
const Flex194Cb = useFlex194Cb()
const Flex193Props = useStore((state)=>state["Product"]["Flex193"]);
const Flex193IoProps = useIoStore((state)=>state["Product"]["Flex193"]);
const Flex193Cb = useFlex193Cb()
const Flex195Props = useStore((state)=>state["Product"]["Flex195"]);
const Flex195IoProps = useIoStore((state)=>state["Product"]["Flex195"]);
const Flex195Cb = useFlex195Cb()
const Item_infoProps = useStore((state)=>state["Product"]["Item_info"]);
const Item_infoIoProps = useIoStore((state)=>state["Product"]["Item_info"]);
const Item_infoCb = useItem_infoCb()
const Flex202Props = useStore((state)=>state["Product"]["Flex202"]);
const Flex202IoProps = useIoStore((state)=>state["Product"]["Flex202"]);
const Flex202Cb = useFlex202Cb()
const Flex201Props = useStore((state)=>state["Product"]["Flex201"]);
const Flex201IoProps = useIoStore((state)=>state["Product"]["Flex201"]);
const Flex201Cb = useFlex201Cb()
const Flex200Props = useStore((state)=>state["Product"]["Flex200"]);
const Flex200IoProps = useIoStore((state)=>state["Product"]["Flex200"]);
const Flex200Cb = useFlex200Cb()
const CartProps = useStore((state)=>state["Product"]["Cart"]);
const CartIoProps = useIoStore((state)=>state["Product"]["Cart"]);
const CartCb = useCartCb()
const QuantityProps = useStore((state)=>state["Product"]["Quantity"]);
const QuantityIoProps = useIoStore((state)=>state["Product"]["Quantity"]);
const QuantityCb = useQuantityCb()
const features_containerProps = useStore((state)=>state["Product"]["features_container"]);
const features_containerIoProps = useIoStore((state)=>state["Product"]["features_container"]);
const features_containerCb = usefeatures_containerCb()
const Flex227Props = useStore((state)=>state["Product"]["Flex227"]);
const Flex227IoProps = useIoStore((state)=>state["Product"]["Flex227"]);
const Flex227Cb = useFlex227Cb()
const Flex226Props = useStore((state)=>state["Product"]["Flex226"]);
const Flex226IoProps = useIoStore((state)=>state["Product"]["Flex226"]);
const Flex226Cb = useFlex226Cb()
const Flex223Props = useStore((state)=>state["Product"]["Flex223"]);
const Flex223IoProps = useIoStore((state)=>state["Product"]["Flex223"]);
const Flex223Cb = useFlex223Cb()
const Flex224Props = useStore((state)=>state["Product"]["Flex224"]);
const Flex224IoProps = useIoStore((state)=>state["Product"]["Flex224"]);
const Flex224Cb = useFlex224Cb()
const Flex225Props = useStore((state)=>state["Product"]["Flex225"]);
const Flex225IoProps = useIoStore((state)=>state["Product"]["Flex225"]);
const Flex225Cb = useFlex225Cb()
const commom_containerProps = useStore((state)=>state["Product"]["commom_container"]);
const commom_containerIoProps = useIoStore((state)=>state["Product"]["commom_container"]);
const commom_containerCb = usecommom_containerCb()
const Flex242Props = useStore((state)=>state["Product"]["Flex242"]);
const Flex242IoProps = useIoStore((state)=>state["Product"]["Flex242"]);
const Flex242Cb = useFlex242Cb()
const Flex241Props = useStore((state)=>state["Product"]["Flex241"]);
const Flex241IoProps = useIoStore((state)=>state["Product"]["Flex241"]);
const Flex241Cb = useFlex241Cb()
const Flex238Props = useStore((state)=>state["Product"]["Flex238"]);
const Flex238IoProps = useIoStore((state)=>state["Product"]["Flex238"]);
const Flex238Cb = useFlex238Cb()
const Flex239Props = useStore((state)=>state["Product"]["Flex239"]);
const Flex239IoProps = useIoStore((state)=>state["Product"]["Flex239"]);
const Flex239Cb = useFlex239Cb()
const Flex240Props = useStore((state)=>state["Product"]["Flex240"]);
const Flex240IoProps = useIoStore((state)=>state["Product"]["Flex240"]);
const Flex240Cb = useFlex240Cb()
const reviewsProps = useStore((state)=>state["Product"]["reviews"]);
const reviewsIoProps = useIoStore((state)=>state["Product"]["reviews"]);
const reviewsCb = usereviewsCb()
const Flex254Props = useStore((state)=>state["Product"]["Flex254"]);
const Flex254IoProps = useIoStore((state)=>state["Product"]["Flex254"]);
const Flex254Cb = useFlex254Cb()
const Flex253Props = useStore((state)=>state["Product"]["Flex253"]);
const Flex253IoProps = useIoStore((state)=>state["Product"]["Flex253"]);
const Flex253Cb = useFlex253Cb()
const Flex250Props = useStore((state)=>state["Product"]["Flex250"]);
const Flex250IoProps = useIoStore((state)=>state["Product"]["Flex250"]);
const Flex250Cb = useFlex250Cb()
const Flex256Props = useStore((state)=>state["Product"]["Flex256"]);
const Flex256IoProps = useIoStore((state)=>state["Product"]["Flex256"]);
const Flex256Cb = useFlex256Cb()
const Flex258Props = useStore((state)=>state["Product"]["Flex258"]);
const Flex258IoProps = useIoStore((state)=>state["Product"]["Flex258"]);
const Flex258Cb = useFlex258Cb()
const Flex257Props = useStore((state)=>state["Product"]["Flex257"]);
const Flex257IoProps = useIoStore((state)=>state["Product"]["Flex257"]);
const Flex257Cb = useFlex257Cb()
const Flex260Props = useStore((state)=>state["Product"]["Flex260"]);
const Flex260IoProps = useIoStore((state)=>state["Product"]["Flex260"]);
const Flex260Cb = useFlex260Cb()
const Flex259Props = useStore((state)=>state["Product"]["Flex259"]);
const Flex259IoProps = useIoStore((state)=>state["Product"]["Flex259"]);
const Flex259Cb = useFlex259Cb()
const Flex262Props = useStore((state)=>state["Product"]["Flex262"]);
const Flex262IoProps = useIoStore((state)=>state["Product"]["Flex262"]);
const Flex262Cb = useFlex262Cb()
const Flex261Props = useStore((state)=>state["Product"]["Flex261"]);
const Flex261IoProps = useIoStore((state)=>state["Product"]["Flex261"]);
const Flex261Cb = useFlex261Cb()
const Flex270Props = useStore((state)=>state["Product"]["Flex270"]);
const Flex270IoProps = useIoStore((state)=>state["Product"]["Flex270"]);
const Flex270Cb = useFlex270Cb()
const Flex269Props = useStore((state)=>state["Product"]["Flex269"]);
const Flex269IoProps = useIoStore((state)=>state["Product"]["Flex269"]);
const Flex269Cb = useFlex269Cb()
const Flex268Props = useStore((state)=>state["Product"]["Flex268"]);
const Flex268IoProps = useIoStore((state)=>state["Product"]["Flex268"]);
const Flex268Cb = useFlex268Cb()
const Flex264Props = useStore((state)=>state["Product"]["Flex264"]);
const Flex264IoProps = useIoStore((state)=>state["Product"]["Flex264"]);
const Flex264Cb = useFlex264Cb()
const Flex265Props = useStore((state)=>state["Product"]["Flex265"]);
const Flex265IoProps = useIoStore((state)=>state["Product"]["Flex265"]);
const Flex265Cb = useFlex265Cb()
const Flex266Props = useStore((state)=>state["Product"]["Flex266"]);
const Flex266IoProps = useIoStore((state)=>state["Product"]["Flex266"]);
const Flex266Cb = useFlex266Cb()
const shop_sectionProps = useStore((state)=>state["Product"]["shop_section"]);
const shop_sectionIoProps = useIoStore((state)=>state["Product"]["shop_section"]);
const shop_sectionCb = useshop_sectionCb()
const Flex278Props = useStore((state)=>state["Product"]["Flex278"]);
const Flex278IoProps = useIoStore((state)=>state["Product"]["Flex278"]);
const Flex278Cb = useFlex278Cb()
const Flex277Props = useStore((state)=>state["Product"]["Flex277"]);
const Flex277IoProps = useIoStore((state)=>state["Product"]["Flex277"]);
const Flex277Cb = useFlex277Cb()
const Flex274Props = useStore((state)=>state["Product"]["Flex274"]);
const Flex274IoProps = useIoStore((state)=>state["Product"]["Flex274"]);
const Flex274Cb = useFlex274Cb()
const Flex271Props = useStore((state)=>state["Product"]["Flex271"]);
const Flex271IoProps = useIoStore((state)=>state["Product"]["Flex271"]);
const Flex271Cb = useFlex271Cb()
const Flex275Props = useStore((state)=>state["Product"]["Flex275"]);
const Flex275IoProps = useIoStore((state)=>state["Product"]["Flex275"]);
const Flex275Cb = useFlex275Cb()
const Flex272Props = useStore((state)=>state["Product"]["Flex272"]);
const Flex272IoProps = useIoStore((state)=>state["Product"]["Flex272"]);
const Flex272Cb = useFlex272Cb()
const Flex276Props = useStore((state)=>state["Product"]["Flex276"]);
const Flex276IoProps = useIoStore((state)=>state["Product"]["Flex276"]);
const Flex276Cb = useFlex276Cb()
const Flex273Props = useStore((state)=>state["Product"]["Flex273"]);
const Flex273IoProps = useIoStore((state)=>state["Product"]["Flex273"]);
const Flex273Cb = useFlex273Cb()
const FooterProps = useStore((state)=>state["Product"]["Footer"]);
const FooterIoProps = useIoStore((state)=>state["Product"]["Footer"]);
const FooterCb = useFooterCb()
const Flex293Props = useStore((state)=>state["Product"]["Flex293"]);
const Flex293IoProps = useIoStore((state)=>state["Product"]["Flex293"]);
const Flex293Cb = useFlex293Cb()
const Flex291Props = useStore((state)=>state["Product"]["Flex291"]);
const Flex291IoProps = useIoStore((state)=>state["Product"]["Flex291"]);
const Flex291Cb = useFlex291Cb()
const Flex288Props = useStore((state)=>state["Product"]["Flex288"]);
const Flex288IoProps = useIoStore((state)=>state["Product"]["Flex288"]);
const Flex288Cb = useFlex288Cb()
const Flex289Props = useStore((state)=>state["Product"]["Flex289"]);
const Flex289IoProps = useIoStore((state)=>state["Product"]["Flex289"]);
const Flex289Cb = useFlex289Cb()
const Flex292Props = useStore((state)=>state["Product"]["Flex292"]);
const Flex292IoProps = useIoStore((state)=>state["Product"]["Flex292"]);
const Flex292Cb = useFlex292Cb()
const Flex290Props = useStore((state)=>state["Product"]["Flex290"]);
const Flex290IoProps = useIoStore((state)=>state["Product"]["Flex290"]);
const Flex290Cb = useFlex290Cb()
const Flex284Props = useStore((state)=>state["Product"]["Flex284"]);
const Flex284IoProps = useIoStore((state)=>state["Product"]["Flex284"]);
const Flex284Cb = useFlex284Cb()
const Flex280Props = useStore((state)=>state["Product"]["Flex280"]);
const Flex280IoProps = useIoStore((state)=>state["Product"]["Flex280"]);
const Flex280Cb = useFlex280Cb()
const Flex285Props = useStore((state)=>state["Product"]["Flex285"]);
const Flex285IoProps = useIoStore((state)=>state["Product"]["Flex285"]);
const Flex285Cb = useFlex285Cb()
const Flex281Props = useStore((state)=>state["Product"]["Flex281"]);
const Flex281IoProps = useIoStore((state)=>state["Product"]["Flex281"]);
const Flex281Cb = useFlex281Cb()
const Flex286Props = useStore((state)=>state["Product"]["Flex286"]);
const Flex286IoProps = useIoStore((state)=>state["Product"]["Flex286"]);
const Flex286Cb = useFlex286Cb()
const Flex282Props = useStore((state)=>state["Product"]["Flex282"]);
const Flex282IoProps = useIoStore((state)=>state["Product"]["Flex282"]);
const Flex282Cb = useFlex282Cb()
const Flex287Props = useStore((state)=>state["Product"]["Flex287"]);
const Flex287IoProps = useIoStore((state)=>state["Product"]["Flex287"]);
const Flex287Cb = useFlex287Cb()
const Flex283Props = useStore((state)=>state["Product"]["Flex283"]);
const Flex283IoProps = useIoStore((state)=>state["Product"]["Flex283"]);
const Flex283Cb = useFlex283Cb()
const newsletterProps = useStore((state)=>state["Product"]["newsletter"]);
const newsletterIoProps = useIoStore((state)=>state["Product"]["newsletter"]);
const newsletterCb = usenewsletterCb()
const Flex323Props = useStore((state)=>state["Product"]["Flex323"]);
const Flex323IoProps = useIoStore((state)=>state["Product"]["Flex323"]);
const Flex323Cb = useFlex323Cb()
const Flex322Props = useStore((state)=>state["Product"]["Flex322"]);
const Flex322IoProps = useIoStore((state)=>state["Product"]["Flex322"]);
const Flex322Cb = useFlex322Cb()
const Flex325Props = useStore((state)=>state["Product"]["Flex325"]);
const Flex325IoProps = useIoStore((state)=>state["Product"]["Flex325"]);
const Flex325Cb = useFlex325Cb()
const TextBox210Props = useStore((state)=>state["Product"]["TextBox210"]);
const TextBox210IoProps = useIoStore((state)=>state["Product"]["TextBox210"]);
const TextBox210Cb = useTextBox210Cb()
const Image81Props = useStore((state)=>state["Product"]["Image81"]);
const Image81IoProps = useIoStore((state)=>state["Product"]["Image81"]);
const Image81Cb = useImage81Cb()
const Image80Props = useStore((state)=>state["Product"]["Image80"]);
const Image80IoProps = useIoStore((state)=>state["Product"]["Image80"]);
const Image80Cb = useImage80Cb()
const TextBox211Props = useStore((state)=>state["Product"]["TextBox211"]);
const TextBox211IoProps = useIoStore((state)=>state["Product"]["TextBox211"]);
const TextBox211Cb = useTextBox211Cb()
const Image79Props = useStore((state)=>state["Product"]["Image79"]);
const Image79IoProps = useIoStore((state)=>state["Product"]["Image79"]);
const Image79Cb = useImage79Cb()
const Dropdown14Props = useStore((state)=>state["Product"]["Dropdown14"]);
const Dropdown14IoProps = useIoStore((state)=>state["Product"]["Dropdown14"]);
const Dropdown14Cb = useDropdown14Cb()
const Dropdown15Props = useStore((state)=>state["Product"]["Dropdown15"]);
const Dropdown15IoProps = useIoStore((state)=>state["Product"]["Dropdown15"]);
const Dropdown15Cb = useDropdown15Cb()
const TextBox212Props = useStore((state)=>state["Product"]["TextBox212"]);
const TextBox212IoProps = useIoStore((state)=>state["Product"]["TextBox212"]);
const TextBox212Cb = useTextBox212Cb()
const TextBox213Props = useStore((state)=>state["Product"]["TextBox213"]);
const TextBox213IoProps = useIoStore((state)=>state["Product"]["TextBox213"]);
const TextBox213Cb = useTextBox213Cb()
const Image82Props = useStore((state)=>state["Product"]["Image82"]);
const Image82IoProps = useIoStore((state)=>state["Product"]["Image82"]);
const Image82Cb = useImage82Cb()
const TextBox218Props = useStore((state)=>state["Product"]["TextBox218"]);
const TextBox218IoProps = useIoStore((state)=>state["Product"]["TextBox218"]);
const TextBox218Cb = useTextBox218Cb()
const TextBox219Props = useStore((state)=>state["Product"]["TextBox219"]);
const TextBox219IoProps = useIoStore((state)=>state["Product"]["TextBox219"]);
const TextBox219Cb = useTextBox219Cb()
const TextBox220Props = useStore((state)=>state["Product"]["TextBox220"]);
const TextBox220IoProps = useIoStore((state)=>state["Product"]["TextBox220"]);
const TextBox220Cb = useTextBox220Cb()
const TextBox221Props = useStore((state)=>state["Product"]["TextBox221"]);
const TextBox221IoProps = useIoStore((state)=>state["Product"]["TextBox221"]);
const TextBox221Cb = useTextBox221Cb()
const TextBox222Props = useStore((state)=>state["Product"]["TextBox222"]);
const TextBox222IoProps = useIoStore((state)=>state["Product"]["TextBox222"]);
const TextBox222Cb = useTextBox222Cb()
const Dropdown17Props = useStore((state)=>state["Product"]["Dropdown17"]);
const Dropdown17IoProps = useIoStore((state)=>state["Product"]["Dropdown17"]);
const Dropdown17Cb = useDropdown17Cb()
const Button15Props = useStore((state)=>state["Product"]["Button15"]);
const Button15IoProps = useIoStore((state)=>state["Product"]["Button15"]);
const Button15Cb = useButton15Cb()
const TextBox226Props = useStore((state)=>state["Product"]["TextBox226"]);
const TextBox226IoProps = useIoStore((state)=>state["Product"]["TextBox226"]);
const TextBox226Cb = useTextBox226Cb()
const Input1Props = useStore((state)=>state["Product"]["Input1"]);
const Input1IoProps = useIoStore((state)=>state["Product"]["Input1"]);
const Input1Cb = useInput1Cb()
const TextBox256Props = useStore((state)=>state["Product"]["TextBox256"]);
const TextBox256IoProps = useIoStore((state)=>state["Product"]["TextBox256"]);
const TextBox256Cb = useTextBox256Cb()
const Image92Props = useStore((state)=>state["Product"]["Image92"]);
const Image92IoProps = useIoStore((state)=>state["Product"]["Image92"]);
const Image92Cb = useImage92Cb()
const TextBox257Props = useStore((state)=>state["Product"]["TextBox257"]);
const TextBox257IoProps = useIoStore((state)=>state["Product"]["TextBox257"]);
const TextBox257Cb = useTextBox257Cb()
const TextBox258Props = useStore((state)=>state["Product"]["TextBox258"]);
const TextBox258IoProps = useIoStore((state)=>state["Product"]["TextBox258"]);
const TextBox258Cb = useTextBox258Cb()
const Image93Props = useStore((state)=>state["Product"]["Image93"]);
const Image93IoProps = useIoStore((state)=>state["Product"]["Image93"]);
const Image93Cb = useImage93Cb()
const TextBox259Props = useStore((state)=>state["Product"]["TextBox259"]);
const TextBox259IoProps = useIoStore((state)=>state["Product"]["TextBox259"]);
const TextBox259Cb = useTextBox259Cb()
const TextBox260Props = useStore((state)=>state["Product"]["TextBox260"]);
const TextBox260IoProps = useIoStore((state)=>state["Product"]["TextBox260"]);
const TextBox260Cb = useTextBox260Cb()
const Image94Props = useStore((state)=>state["Product"]["Image94"]);
const Image94IoProps = useIoStore((state)=>state["Product"]["Image94"]);
const Image94Cb = useImage94Cb()
const TextBox261Props = useStore((state)=>state["Product"]["TextBox261"]);
const TextBox261IoProps = useIoStore((state)=>state["Product"]["TextBox261"]);
const TextBox261Cb = useTextBox261Cb()
const TextBox281Props = useStore((state)=>state["Product"]["TextBox281"]);
const TextBox281IoProps = useIoStore((state)=>state["Product"]["TextBox281"]);
const TextBox281Cb = useTextBox281Cb()
const TextBox275Props = useStore((state)=>state["Product"]["TextBox275"]);
const TextBox275IoProps = useIoStore((state)=>state["Product"]["TextBox275"]);
const TextBox275Cb = useTextBox275Cb()
const TextBox276Props = useStore((state)=>state["Product"]["TextBox276"]);
const TextBox276IoProps = useIoStore((state)=>state["Product"]["TextBox276"]);
const TextBox276Cb = useTextBox276Cb()
const TextBox277Props = useStore((state)=>state["Product"]["TextBox277"]);
const TextBox277IoProps = useIoStore((state)=>state["Product"]["TextBox277"]);
const TextBox277Cb = useTextBox277Cb()
const TextBox278Props = useStore((state)=>state["Product"]["TextBox278"]);
const TextBox278IoProps = useIoStore((state)=>state["Product"]["TextBox278"]);
const TextBox278Cb = useTextBox278Cb()
const TextBox279Props = useStore((state)=>state["Product"]["TextBox279"]);
const TextBox279IoProps = useIoStore((state)=>state["Product"]["TextBox279"]);
const TextBox279Cb = useTextBox279Cb()
const TextBox280Props = useStore((state)=>state["Product"]["TextBox280"]);
const TextBox280IoProps = useIoStore((state)=>state["Product"]["TextBox280"]);
const TextBox280Cb = useTextBox280Cb()
const TextBox295Props = useStore((state)=>state["Product"]["TextBox295"]);
const TextBox295IoProps = useIoStore((state)=>state["Product"]["TextBox295"]);
const TextBox295Cb = useTextBox295Cb()
const TextBox289Props = useStore((state)=>state["Product"]["TextBox289"]);
const TextBox289IoProps = useIoStore((state)=>state["Product"]["TextBox289"]);
const TextBox289Cb = useTextBox289Cb()
const TextBox290Props = useStore((state)=>state["Product"]["TextBox290"]);
const TextBox290IoProps = useIoStore((state)=>state["Product"]["TextBox290"]);
const TextBox290Cb = useTextBox290Cb()
const Image104Props = useStore((state)=>state["Product"]["Image104"]);
const Image104IoProps = useIoStore((state)=>state["Product"]["Image104"]);
const Image104Cb = useImage104Cb()
const Image105Props = useStore((state)=>state["Product"]["Image105"]);
const Image105IoProps = useIoStore((state)=>state["Product"]["Image105"]);
const Image105Cb = useImage105Cb()
const Image106Props = useStore((state)=>state["Product"]["Image106"]);
const Image106IoProps = useIoStore((state)=>state["Product"]["Image106"]);
const Image106Cb = useImage106Cb()
const Image107Props = useStore((state)=>state["Product"]["Image107"]);
const Image107IoProps = useIoStore((state)=>state["Product"]["Image107"]);
const Image107Cb = useImage107Cb()
const Image108Props = useStore((state)=>state["Product"]["Image108"]);
const Image108IoProps = useIoStore((state)=>state["Product"]["Image108"]);
const Image108Cb = useImage108Cb()
const TextBox296Props = useStore((state)=>state["Product"]["TextBox296"]);
const TextBox296IoProps = useIoStore((state)=>state["Product"]["TextBox296"]);
const TextBox296Cb = useTextBox296Cb()
const TextBox297Props = useStore((state)=>state["Product"]["TextBox297"]);
const TextBox297IoProps = useIoStore((state)=>state["Product"]["TextBox297"]);
const TextBox297Cb = useTextBox297Cb()
const Image109Props = useStore((state)=>state["Product"]["Image109"]);
const Image109IoProps = useIoStore((state)=>state["Product"]["Image109"]);
const Image109Cb = useImage109Cb()
const Image110Props = useStore((state)=>state["Product"]["Image110"]);
const Image110IoProps = useIoStore((state)=>state["Product"]["Image110"]);
const Image110Cb = useImage110Cb()
const Image111Props = useStore((state)=>state["Product"]["Image111"]);
const Image111IoProps = useIoStore((state)=>state["Product"]["Image111"]);
const Image111Cb = useImage111Cb()
const Image112Props = useStore((state)=>state["Product"]["Image112"]);
const Image112IoProps = useIoStore((state)=>state["Product"]["Image112"]);
const Image112Cb = useImage112Cb()
const Image113Props = useStore((state)=>state["Product"]["Image113"]);
const Image113IoProps = useIoStore((state)=>state["Product"]["Image113"]);
const Image113Cb = useImage113Cb()
const TextBox298Props = useStore((state)=>state["Product"]["TextBox298"]);
const TextBox298IoProps = useIoStore((state)=>state["Product"]["TextBox298"]);
const TextBox298Cb = useTextBox298Cb()
const TextBox299Props = useStore((state)=>state["Product"]["TextBox299"]);
const TextBox299IoProps = useIoStore((state)=>state["Product"]["TextBox299"]);
const TextBox299Cb = useTextBox299Cb()
const Image114Props = useStore((state)=>state["Product"]["Image114"]);
const Image114IoProps = useIoStore((state)=>state["Product"]["Image114"]);
const Image114Cb = useImage114Cb()
const Image115Props = useStore((state)=>state["Product"]["Image115"]);
const Image115IoProps = useIoStore((state)=>state["Product"]["Image115"]);
const Image115Cb = useImage115Cb()
const Image116Props = useStore((state)=>state["Product"]["Image116"]);
const Image116IoProps = useIoStore((state)=>state["Product"]["Image116"]);
const Image116Cb = useImage116Cb()
const Image117Props = useStore((state)=>state["Product"]["Image117"]);
const Image117IoProps = useIoStore((state)=>state["Product"]["Image117"]);
const Image117Cb = useImage117Cb()
const Image118Props = useStore((state)=>state["Product"]["Image118"]);
const Image118IoProps = useIoStore((state)=>state["Product"]["Image118"]);
const Image118Cb = useImage118Cb()
const TextBox300Props = useStore((state)=>state["Product"]["TextBox300"]);
const TextBox300IoProps = useIoStore((state)=>state["Product"]["TextBox300"]);
const TextBox300Cb = useTextBox300Cb()
const TextBox301Props = useStore((state)=>state["Product"]["TextBox301"]);
const TextBox301IoProps = useIoStore((state)=>state["Product"]["TextBox301"]);
const TextBox301Cb = useTextBox301Cb()
const Image119Props = useStore((state)=>state["Product"]["Image119"]);
const Image119IoProps = useIoStore((state)=>state["Product"]["Image119"]);
const Image119Cb = useImage119Cb()
const Image120Props = useStore((state)=>state["Product"]["Image120"]);
const Image120IoProps = useIoStore((state)=>state["Product"]["Image120"]);
const Image120Cb = useImage120Cb()
const Image121Props = useStore((state)=>state["Product"]["Image121"]);
const Image121IoProps = useIoStore((state)=>state["Product"]["Image121"]);
const Image121Cb = useImage121Cb()
const Image122Props = useStore((state)=>state["Product"]["Image122"]);
const Image122IoProps = useIoStore((state)=>state["Product"]["Image122"]);
const Image122Cb = useImage122Cb()
const Image123Props = useStore((state)=>state["Product"]["Image123"]);
const Image123IoProps = useIoStore((state)=>state["Product"]["Image123"]);
const Image123Cb = useImage123Cb()
const Image124Props = useStore((state)=>state["Product"]["Image124"]);
const Image124IoProps = useIoStore((state)=>state["Product"]["Image124"]);
const Image124Cb = useImage124Cb()
const TextBox304Props = useStore((state)=>state["Product"]["TextBox304"]);
const TextBox304IoProps = useIoStore((state)=>state["Product"]["TextBox304"]);
const TextBox304Cb = useTextBox304Cb()
const Image125Props = useStore((state)=>state["Product"]["Image125"]);
const Image125IoProps = useIoStore((state)=>state["Product"]["Image125"]);
const Image125Cb = useImage125Cb()
const TextBox305Props = useStore((state)=>state["Product"]["TextBox305"]);
const TextBox305IoProps = useIoStore((state)=>state["Product"]["TextBox305"]);
const TextBox305Cb = useTextBox305Cb()
const TextBox306Props = useStore((state)=>state["Product"]["TextBox306"]);
const TextBox306IoProps = useIoStore((state)=>state["Product"]["TextBox306"]);
const TextBox306Cb = useTextBox306Cb()
const Image126Props = useStore((state)=>state["Product"]["Image126"]);
const Image126IoProps = useIoStore((state)=>state["Product"]["Image126"]);
const Image126Cb = useImage126Cb()
const Button17Props = useStore((state)=>state["Product"]["Button17"]);
const Button17IoProps = useIoStore((state)=>state["Product"]["Button17"]);
const Button17Cb = useButton17Cb()
const TextBox313Props = useStore((state)=>state["Product"]["TextBox313"]);
const TextBox313IoProps = useIoStore((state)=>state["Product"]["TextBox313"]);
const TextBox313Cb = useTextBox313Cb()
const TextBox307Props = useStore((state)=>state["Product"]["TextBox307"]);
const TextBox307IoProps = useIoStore((state)=>state["Product"]["TextBox307"]);
const TextBox307Cb = useTextBox307Cb()
const TextBox308Props = useStore((state)=>state["Product"]["TextBox308"]);
const TextBox308IoProps = useIoStore((state)=>state["Product"]["TextBox308"]);
const TextBox308Cb = useTextBox308Cb()
const Image127Props = useStore((state)=>state["Product"]["Image127"]);
const Image127IoProps = useIoStore((state)=>state["Product"]["Image127"]);
const Image127Cb = useImage127Cb()
const TextBox309Props = useStore((state)=>state["Product"]["TextBox309"]);
const TextBox309IoProps = useIoStore((state)=>state["Product"]["TextBox309"]);
const TextBox309Cb = useTextBox309Cb()
const TextBox310Props = useStore((state)=>state["Product"]["TextBox310"]);
const TextBox310IoProps = useIoStore((state)=>state["Product"]["TextBox310"]);
const TextBox310Cb = useTextBox310Cb()
const Image128Props = useStore((state)=>state["Product"]["Image128"]);
const Image128IoProps = useIoStore((state)=>state["Product"]["Image128"]);
const Image128Cb = useImage128Cb()
const Image129Props = useStore((state)=>state["Product"]["Image129"]);
const Image129IoProps = useIoStore((state)=>state["Product"]["Image129"]);
const Image129Cb = useImage129Cb()
const TextBox311Props = useStore((state)=>state["Product"]["TextBox311"]);
const TextBox311IoProps = useIoStore((state)=>state["Product"]["TextBox311"]);
const TextBox311Cb = useTextBox311Cb()
const TextBox312Props = useStore((state)=>state["Product"]["TextBox312"]);
const TextBox312IoProps = useIoStore((state)=>state["Product"]["TextBox312"]);
const TextBox312Cb = useTextBox312Cb()
const Image130Props = useStore((state)=>state["Product"]["Image130"]);
const Image130IoProps = useIoStore((state)=>state["Product"]["Image130"]);
const Image130Cb = useImage130Cb()
const Image131Props = useStore((state)=>state["Product"]["Image131"]);
const Image131IoProps = useIoStore((state)=>state["Product"]["Image131"]);
const Image131Cb = useImage131Cb()
const Image132Props = useStore((state)=>state["Product"]["Image132"]);
const Image132IoProps = useIoStore((state)=>state["Product"]["Image132"]);
const Image132Cb = useImage132Cb()
const TextBox335Props = useStore((state)=>state["Product"]["TextBox335"]);
const TextBox335IoProps = useIoStore((state)=>state["Product"]["TextBox335"]);
const TextBox335Cb = useTextBox335Cb()
const TextBox336Props = useStore((state)=>state["Product"]["TextBox336"]);
const TextBox336IoProps = useIoStore((state)=>state["Product"]["TextBox336"]);
const TextBox336Cb = useTextBox336Cb()
const Image133Props = useStore((state)=>state["Product"]["Image133"]);
const Image133IoProps = useIoStore((state)=>state["Product"]["Image133"]);
const Image133Cb = useImage133Cb()
const TextBox331Props = useStore((state)=>state["Product"]["TextBox331"]);
const TextBox331IoProps = useIoStore((state)=>state["Product"]["TextBox331"]);
const TextBox331Cb = useTextBox331Cb()
const TextBox314Props = useStore((state)=>state["Product"]["TextBox314"]);
const TextBox314IoProps = useIoStore((state)=>state["Product"]["TextBox314"]);
const TextBox314Cb = useTextBox314Cb()
const TextBox315Props = useStore((state)=>state["Product"]["TextBox315"]);
const TextBox315IoProps = useIoStore((state)=>state["Product"]["TextBox315"]);
const TextBox315Cb = useTextBox315Cb()
const TextBox316Props = useStore((state)=>state["Product"]["TextBox316"]);
const TextBox316IoProps = useIoStore((state)=>state["Product"]["TextBox316"]);
const TextBox316Cb = useTextBox316Cb()
const TextBox332Props = useStore((state)=>state["Product"]["TextBox332"]);
const TextBox332IoProps = useIoStore((state)=>state["Product"]["TextBox332"]);
const TextBox332Cb = useTextBox332Cb()
const TextBox317Props = useStore((state)=>state["Product"]["TextBox317"]);
const TextBox317IoProps = useIoStore((state)=>state["Product"]["TextBox317"]);
const TextBox317Cb = useTextBox317Cb()
const TextBox318Props = useStore((state)=>state["Product"]["TextBox318"]);
const TextBox318IoProps = useIoStore((state)=>state["Product"]["TextBox318"]);
const TextBox318Cb = useTextBox318Cb()
const TextBox319Props = useStore((state)=>state["Product"]["TextBox319"]);
const TextBox319IoProps = useIoStore((state)=>state["Product"]["TextBox319"]);
const TextBox319Cb = useTextBox319Cb()
const TextBox320Props = useStore((state)=>state["Product"]["TextBox320"]);
const TextBox320IoProps = useIoStore((state)=>state["Product"]["TextBox320"]);
const TextBox320Cb = useTextBox320Cb()
const TextBox333Props = useStore((state)=>state["Product"]["TextBox333"]);
const TextBox333IoProps = useIoStore((state)=>state["Product"]["TextBox333"]);
const TextBox333Cb = useTextBox333Cb()
const TextBox321Props = useStore((state)=>state["Product"]["TextBox321"]);
const TextBox321IoProps = useIoStore((state)=>state["Product"]["TextBox321"]);
const TextBox321Cb = useTextBox321Cb()
const TextBox322Props = useStore((state)=>state["Product"]["TextBox322"]);
const TextBox322IoProps = useIoStore((state)=>state["Product"]["TextBox322"]);
const TextBox322Cb = useTextBox322Cb()
const TextBox323Props = useStore((state)=>state["Product"]["TextBox323"]);
const TextBox323IoProps = useIoStore((state)=>state["Product"]["TextBox323"]);
const TextBox323Cb = useTextBox323Cb()
const TextBox324Props = useStore((state)=>state["Product"]["TextBox324"]);
const TextBox324IoProps = useIoStore((state)=>state["Product"]["TextBox324"]);
const TextBox324Cb = useTextBox324Cb()
const TextBox325Props = useStore((state)=>state["Product"]["TextBox325"]);
const TextBox325IoProps = useIoStore((state)=>state["Product"]["TextBox325"]);
const TextBox325Cb = useTextBox325Cb()
const TextBox334Props = useStore((state)=>state["Product"]["TextBox334"]);
const TextBox334IoProps = useIoStore((state)=>state["Product"]["TextBox334"]);
const TextBox334Cb = useTextBox334Cb()
const TextBox326Props = useStore((state)=>state["Product"]["TextBox326"]);
const TextBox326IoProps = useIoStore((state)=>state["Product"]["TextBox326"]);
const TextBox326Cb = useTextBox326Cb()
const TextBox327Props = useStore((state)=>state["Product"]["TextBox327"]);
const TextBox327IoProps = useIoStore((state)=>state["Product"]["TextBox327"]);
const TextBox327Cb = useTextBox327Cb()
const TextBox328Props = useStore((state)=>state["Product"]["TextBox328"]);
const TextBox328IoProps = useIoStore((state)=>state["Product"]["TextBox328"]);
const TextBox328Cb = useTextBox328Cb()
const TextBox329Props = useStore((state)=>state["Product"]["TextBox329"]);
const TextBox329IoProps = useIoStore((state)=>state["Product"]["TextBox329"]);
const TextBox329Cb = useTextBox329Cb()
const TextBox330Props = useStore((state)=>state["Product"]["TextBox330"]);
const TextBox330IoProps = useIoStore((state)=>state["Product"]["TextBox330"]);
const TextBox330Cb = useTextBox330Cb()
const TextBox383Props = useStore((state)=>state["Product"]["TextBox383"]);
const TextBox383IoProps = useIoStore((state)=>state["Product"]["TextBox383"]);
const TextBox383Cb = useTextBox383Cb()
const TextBox384Props = useStore((state)=>state["Product"]["TextBox384"]);
const TextBox384IoProps = useIoStore((state)=>state["Product"]["TextBox384"]);
const TextBox384Cb = useTextBox384Cb()
const Input3Props = useStore((state)=>state["Product"]["Input3"]);
const Input3IoProps = useIoStore((state)=>state["Product"]["Input3"]);
const Input3Cb = useInput3Cb()
const Button18Props = useStore((state)=>state["Product"]["Button18"]);
const Button18IoProps = useIoStore((state)=>state["Product"]["Button18"]);
const Button18Cb = useButton18Cb()

  return (<>
  <Flex2 className="p-Product headline bpt" {...headlineProps} {...headlineCb} {...headlineIoProps}>
<TextBox2 className="p-Product TextBox210 bpt" {...TextBox210Props} {...TextBox210Cb} {...TextBox210IoProps}/>
</Flex2>
<Flex2 className="p-Product navbar bpt" {...navbarProps} {...navbarCb} {...navbarIoProps}>
<Flex2 className="p-Product Flex196 bpt" {...Flex196Props} {...Flex196Cb} {...Flex196IoProps}>
<Flex2 className="p-Product Flex195 bpt" {...Flex195Props} {...Flex195Cb} {...Flex195IoProps}>
<TextBox2 className="p-Product TextBox212 bpt" {...TextBox212Props} {...TextBox212Cb} {...TextBox212IoProps}/>
<TextBox2 className="p-Product TextBox213 bpt" {...TextBox213Props} {...TextBox213Cb} {...TextBox213IoProps}/>
<Dropdown2 className="p-Product Dropdown15 bpt" {...Dropdown15Props} {...Dropdown15Cb} {...Dropdown15IoProps}/>
<Dropdown2 className="p-Product Dropdown14 bpt" {...Dropdown14Props} {...Dropdown14Cb} {...Dropdown14IoProps}/>
</Flex2>
<Image2 className="p-Product Image81 bpt" {...Image81Props} {...Image81Cb} {...Image81IoProps}/>
<Flex2 className="p-Product Flex194 bpt" {...Flex194Props} {...Flex194Cb} {...Flex194IoProps}>
<Image2 className="p-Product Image80 bpt" {...Image80Props} {...Image80Cb} {...Image80IoProps}/>
<Flex2 className="p-Product Flex193 bpt" {...Flex193Props} {...Flex193Cb} {...Flex193IoProps}>
<Image2 className="p-Product Image79 bpt" {...Image79Props} {...Image79Cb} {...Image79IoProps}/>
<TextBox2 className="p-Product TextBox211 bpt" {...TextBox211Props} {...TextBox211Cb} {...TextBox211IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Product Item_info bpt" {...Item_infoProps} {...Item_infoCb} {...Item_infoIoProps}>
<Flex2 className="p-Product Flex202 bpt" {...Flex202Props} {...Flex202Cb} {...Flex202IoProps}>
<Flex2 className="p-Product Flex201 bpt" {...Flex201Props} {...Flex201Cb} {...Flex201IoProps}>
<Image2 className="p-Product Image82 bpt" {...Image82Props} {...Image82Cb} {...Image82IoProps}/>
<Flex2 className="p-Product Flex200 bpt" {...Flex200Props} {...Flex200Cb} {...Flex200IoProps}>
<TextBox2 className="p-Product TextBox220 bpt" {...TextBox220Props} {...TextBox220Cb} {...TextBox220IoProps}/>
<TextBox2 className="p-Product TextBox219 bpt" {...TextBox219Props} {...TextBox219Cb} {...TextBox219IoProps}/>
<TextBox2 className="p-Product TextBox221 bpt" {...TextBox221Props} {...TextBox221Cb} {...TextBox221IoProps}/>
<TextBox2 className="p-Product TextBox218 bpt" {...TextBox218Props} {...TextBox218Cb} {...TextBox218IoProps}/>
<TextBox2 className="p-Product TextBox222 bpt" {...TextBox222Props} {...TextBox222Cb} {...TextBox222IoProps}/>
<Dropdown2 className="p-Product Dropdown17 bpt" {...Dropdown17Props} {...Dropdown17Cb} {...Dropdown17IoProps}/>
<Flex2 className="p-Product Cart bpt" {...CartProps} {...CartCb} {...CartIoProps}>
<Flex2 className="p-Product Quantity bpt" {...QuantityProps} {...QuantityCb} {...QuantityIoProps}>
<TextBox2 className="p-Product TextBox226 bpt" {...TextBox226Props} {...TextBox226Cb} {...TextBox226IoProps}/>
<Input className="p-Product Input1 bpt" {...Input1Props} {...Input1Cb} {...Input1IoProps}/>
</Flex2>
<Button1 className="p-Product Button15 bpt" {...Button15Props} {...Button15Cb} {...Button15IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Product features_container bpt" {...features_containerProps} {...features_containerCb} {...features_containerIoProps}>
<Flex2 className="p-Product Flex227 bpt" {...Flex227Props} {...Flex227Cb} {...Flex227IoProps}>
<Flex2 className="p-Product Flex226 bpt" {...Flex226Props} {...Flex226Cb} {...Flex226IoProps}>
<Flex2 className="p-Product Flex223 bpt" {...Flex223Props} {...Flex223Cb} {...Flex223IoProps}>
<Image2 className="p-Product Image92 bpt" {...Image92Props} {...Image92Cb} {...Image92IoProps}/>
<TextBox2 className="p-Product TextBox256 bpt" {...TextBox256Props} {...TextBox256Cb} {...TextBox256IoProps}/>
<TextBox2 className="p-Product TextBox257 bpt" {...TextBox257Props} {...TextBox257Cb} {...TextBox257IoProps}/>
</Flex2>
<Flex2 className="p-Product Flex224 bpt" {...Flex224Props} {...Flex224Cb} {...Flex224IoProps}>
<Image2 className="p-Product Image93 bpt" {...Image93Props} {...Image93Cb} {...Image93IoProps}/>
<TextBox2 className="p-Product TextBox259 bpt" {...TextBox259Props} {...TextBox259Cb} {...TextBox259IoProps}/>
<TextBox2 className="p-Product TextBox258 bpt" {...TextBox258Props} {...TextBox258Cb} {...TextBox258IoProps}/>
</Flex2>
<Flex2 className="p-Product Flex225 bpt" {...Flex225Props} {...Flex225Cb} {...Flex225IoProps}>
<Image2 className="p-Product Image94 bpt" {...Image94Props} {...Image94Cb} {...Image94IoProps}/>
<TextBox2 className="p-Product TextBox261 bpt" {...TextBox261Props} {...TextBox261Cb} {...TextBox261IoProps}/>
<TextBox2 className="p-Product TextBox260 bpt" {...TextBox260Props} {...TextBox260Cb} {...TextBox260IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Product commom_container bpt" {...commom_containerProps} {...commom_containerCb} {...commom_containerIoProps}>
<Flex2 className="p-Product Flex242 bpt" {...Flex242Props} {...Flex242Cb} {...Flex242IoProps}>
<TextBox2 className="p-Product TextBox281 bpt" {...TextBox281Props} {...TextBox281Cb} {...TextBox281IoProps}/>
<Flex2 className="p-Product Flex241 bpt" {...Flex241Props} {...Flex241Cb} {...Flex241IoProps}>
<Flex2 className="p-Product Flex240 bpt" {...Flex240Props} {...Flex240Cb} {...Flex240IoProps}>
<TextBox2 className="p-Product TextBox280 bpt" {...TextBox280Props} {...TextBox280Cb} {...TextBox280IoProps}/>
<TextBox2 className="p-Product TextBox279 bpt" {...TextBox279Props} {...TextBox279Cb} {...TextBox279IoProps}/>
</Flex2>
<Flex2 className="p-Product Flex239 bpt" {...Flex239Props} {...Flex239Cb} {...Flex239IoProps}>
<TextBox2 className="p-Product TextBox277 bpt" {...TextBox277Props} {...TextBox277Cb} {...TextBox277IoProps}/>
<TextBox2 className="p-Product TextBox278 bpt" {...TextBox278Props} {...TextBox278Cb} {...TextBox278IoProps}/>
</Flex2>
<Flex2 className="p-Product Flex238 bpt" {...Flex238Props} {...Flex238Cb} {...Flex238IoProps}>
<TextBox2 className="p-Product TextBox275 bpt" {...TextBox275Props} {...TextBox275Cb} {...TextBox275IoProps}/>
<TextBox2 className="p-Product TextBox276 bpt" {...TextBox276Props} {...TextBox276Cb} {...TextBox276IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Product reviews bpt" {...reviewsProps} {...reviewsCb} {...reviewsIoProps}>
<Flex2 className="p-Product Flex254 bpt" {...Flex254Props} {...Flex254Cb} {...Flex254IoProps}>
<TextBox2 className="p-Product TextBox295 bpt" {...TextBox295Props} {...TextBox295Cb} {...TextBox295IoProps}/>
<Flex2 className="p-Product Flex253 bpt" {...Flex253Props} {...Flex253Cb} {...Flex253IoProps}>
<Flex2 className="p-Product Flex250 bpt" {...Flex250Props} {...Flex250Cb} {...Flex250IoProps}>
<Flex2 className="p-Product Flex256 bpt" {...Flex256Props} {...Flex256Cb} {...Flex256IoProps}>
<Image2 className="p-Product Image108 bpt" {...Image108Props} {...Image108Cb} {...Image108IoProps}/>
<Image2 className="p-Product Image107 bpt" {...Image107Props} {...Image107Cb} {...Image107IoProps}/>
<Image2 className="p-Product Image106 bpt" {...Image106Props} {...Image106Cb} {...Image106IoProps}/>
<Image2 className="p-Product Image105 bpt" {...Image105Props} {...Image105Cb} {...Image105IoProps}/>
<Image2 className="p-Product Image104 bpt" {...Image104Props} {...Image104Cb} {...Image104IoProps}/>
</Flex2>
<TextBox2 className="p-Product TextBox289 bpt" {...TextBox289Props} {...TextBox289Cb} {...TextBox289IoProps}/>
<TextBox2 className="p-Product TextBox290 bpt" {...TextBox290Props} {...TextBox290Cb} {...TextBox290IoProps}/>
</Flex2>
<Flex2 className="p-Product Flex258 bpt" {...Flex258Props} {...Flex258Cb} {...Flex258IoProps}>
<Flex2 className="p-Product Flex257 bpt" {...Flex257Props} {...Flex257Cb} {...Flex257IoProps}>
<Image2 className="p-Product Image109 bpt" {...Image109Props} {...Image109Cb} {...Image109IoProps}/>
<Image2 className="p-Product Image110 bpt" {...Image110Props} {...Image110Cb} {...Image110IoProps}/>
<Image2 className="p-Product Image111 bpt" {...Image111Props} {...Image111Cb} {...Image111IoProps}/>
<Image2 className="p-Product Image112 bpt" {...Image112Props} {...Image112Cb} {...Image112IoProps}/>
<Image2 className="p-Product Image113 bpt" {...Image113Props} {...Image113Cb} {...Image113IoProps}/>
</Flex2>
<TextBox2 className="p-Product TextBox297 bpt" {...TextBox297Props} {...TextBox297Cb} {...TextBox297IoProps}/>
<TextBox2 className="p-Product TextBox296 bpt" {...TextBox296Props} {...TextBox296Cb} {...TextBox296IoProps}/>
</Flex2>
<Flex2 className="p-Product Flex260 bpt" {...Flex260Props} {...Flex260Cb} {...Flex260IoProps}>
<Flex2 className="p-Product Flex259 bpt" {...Flex259Props} {...Flex259Cb} {...Flex259IoProps}>
<Image2 className="p-Product Image114 bpt" {...Image114Props} {...Image114Cb} {...Image114IoProps}/>
<Image2 className="p-Product Image115 bpt" {...Image115Props} {...Image115Cb} {...Image115IoProps}/>
<Image2 className="p-Product Image116 bpt" {...Image116Props} {...Image116Cb} {...Image116IoProps}/>
<Image2 className="p-Product Image117 bpt" {...Image117Props} {...Image117Cb} {...Image117IoProps}/>
<Image2 className="p-Product Image118 bpt" {...Image118Props} {...Image118Cb} {...Image118IoProps}/>
</Flex2>
<TextBox2 className="p-Product TextBox299 bpt" {...TextBox299Props} {...TextBox299Cb} {...TextBox299IoProps}/>
<TextBox2 className="p-Product TextBox298 bpt" {...TextBox298Props} {...TextBox298Cb} {...TextBox298IoProps}/>
</Flex2>
<Flex2 className="p-Product Flex262 bpt" {...Flex262Props} {...Flex262Cb} {...Flex262IoProps}>
<Flex2 className="p-Product Flex261 bpt" {...Flex261Props} {...Flex261Cb} {...Flex261IoProps}>
<Image2 className="p-Product Image119 bpt" {...Image119Props} {...Image119Cb} {...Image119IoProps}/>
<Image2 className="p-Product Image120 bpt" {...Image120Props} {...Image120Cb} {...Image120IoProps}/>
<Image2 className="p-Product Image121 bpt" {...Image121Props} {...Image121Cb} {...Image121IoProps}/>
<Image2 className="p-Product Image122 bpt" {...Image122Props} {...Image122Cb} {...Image122IoProps}/>
<Image2 className="p-Product Image123 bpt" {...Image123Props} {...Image123Cb} {...Image123IoProps}/>
</Flex2>
<TextBox2 className="p-Product TextBox301 bpt" {...TextBox301Props} {...TextBox301Cb} {...TextBox301IoProps}/>
<TextBox2 className="p-Product TextBox300 bpt" {...TextBox300Props} {...TextBox300Cb} {...TextBox300IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Product Flex270 bpt" {...Flex270Props} {...Flex270Cb} {...Flex270IoProps}>
<Flex2 className="p-Product Flex269 bpt" {...Flex269Props} {...Flex269Cb} {...Flex269IoProps}>
<Flex2 className="p-Product Flex268 bpt" {...Flex268Props} {...Flex268Cb} {...Flex268IoProps}>
<Flex2 className="p-Product Flex266 bpt" {...Flex266Props} {...Flex266Cb} {...Flex266IoProps}>
<Image2 className="p-Product Image126 bpt" {...Image126Props} {...Image126Cb} {...Image126IoProps}/>
<TextBox2 className="p-Product TextBox306 bpt" {...TextBox306Props} {...TextBox306Cb} {...TextBox306IoProps}/>
</Flex2>
<Flex2 className="p-Product Flex265 bpt" {...Flex265Props} {...Flex265Cb} {...Flex265IoProps}>
<Image2 className="p-Product Image125 bpt" {...Image125Props} {...Image125Cb} {...Image125IoProps}/>
<TextBox2 className="p-Product TextBox305 bpt" {...TextBox305Props} {...TextBox305Cb} {...TextBox305IoProps}/>
</Flex2>
<Flex2 className="p-Product Flex264 bpt" {...Flex264Props} {...Flex264Cb} {...Flex264IoProps}>
<Image2 className="p-Product Image124 bpt" {...Image124Props} {...Image124Cb} {...Image124IoProps}/>
<TextBox2 className="p-Product TextBox304 bpt" {...TextBox304Props} {...TextBox304Cb} {...TextBox304IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Product shop_section bpt" {...shop_sectionProps} {...shop_sectionCb} {...shop_sectionIoProps}>
<Flex2 className="p-Product Flex278 bpt" {...Flex278Props} {...Flex278Cb} {...Flex278IoProps}>
<TextBox2 className="p-Product TextBox313 bpt" {...TextBox313Props} {...TextBox313Cb} {...TextBox313IoProps}/>
<Flex2 className="p-Product Flex277 bpt" {...Flex277Props} {...Flex277Cb} {...Flex277IoProps}>
<Flex2 className="p-Product Flex276 bpt" {...Flex276Props} {...Flex276Cb} {...Flex276IoProps}>
<Flex2 className="p-Product Flex273 bpt" {...Flex273Props} {...Flex273Cb} {...Flex273IoProps}>
<Image2 className="p-Product Image129 bpt" {...Image129Props} {...Image129Cb} {...Image129IoProps}/>
<TextBox2 className="p-Product TextBox312 bpt" {...TextBox312Props} {...TextBox312Cb} {...TextBox312IoProps}/>
<TextBox2 className="p-Product TextBox311 bpt" {...TextBox311Props} {...TextBox311Cb} {...TextBox311IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Product Flex275 bpt" {...Flex275Props} {...Flex275Cb} {...Flex275IoProps}>
<Flex2 className="p-Product Flex272 bpt" {...Flex272Props} {...Flex272Cb} {...Flex272IoProps}>
<Image2 className="p-Product Image128 bpt" {...Image128Props} {...Image128Cb} {...Image128IoProps}/>
<TextBox2 className="p-Product TextBox309 bpt" {...TextBox309Props} {...TextBox309Cb} {...TextBox309IoProps}/>
<TextBox2 className="p-Product TextBox310 bpt" {...TextBox310Props} {...TextBox310Cb} {...TextBox310IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Product Flex274 bpt" {...Flex274Props} {...Flex274Cb} {...Flex274IoProps}>
<Flex2 className="p-Product Flex271 bpt" {...Flex271Props} {...Flex271Cb} {...Flex271IoProps}>
<Image2 className="p-Product Image127 bpt" {...Image127Props} {...Image127Cb} {...Image127IoProps}/>
<TextBox2 className="p-Product TextBox307 bpt" {...TextBox307Props} {...TextBox307Cb} {...TextBox307IoProps}/>
<TextBox2 className="p-Product TextBox308 bpt" {...TextBox308Props} {...TextBox308Cb} {...TextBox308IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Button1 className="p-Product Button17 bpt" {...Button17Props} {...Button17Cb} {...Button17IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Product newsletter bpt" {...newsletterProps} {...newsletterCb} {...newsletterIoProps}>
<Flex2 className="p-Product Flex323 bpt" {...Flex323Props} {...Flex323Cb} {...Flex323IoProps}>
<Flex2 className="p-Product Flex322 bpt" {...Flex322Props} {...Flex322Cb} {...Flex322IoProps}>
<TextBox2 className="p-Product TextBox383 bpt" {...TextBox383Props} {...TextBox383Cb} {...TextBox383IoProps}/>
<TextBox2 className="p-Product TextBox384 bpt" {...TextBox384Props} {...TextBox384Cb} {...TextBox384IoProps}/>
<Flex2 className="p-Product Flex325 bpt" {...Flex325Props} {...Flex325Cb} {...Flex325IoProps}>
<Input className="p-Product Input3 bpt" {...Input3Props} {...Input3Cb} {...Input3IoProps}/>
<Button1 className="p-Product Button18 bpt" {...Button18Props} {...Button18Cb} {...Button18IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Product Footer bpt" {...FooterProps} {...FooterCb} {...FooterIoProps}>
<Flex2 className="p-Product Flex293 bpt" {...Flex293Props} {...Flex293Cb} {...Flex293IoProps}>
<Flex2 className="p-Product Flex292 bpt" {...Flex292Props} {...Flex292Cb} {...Flex292IoProps}>
<Image2 className="p-Product Image133 bpt" {...Image133Props} {...Image133Cb} {...Image133IoProps}/>
<Flex2 className="p-Product Flex290 bpt" {...Flex290Props} {...Flex290Cb} {...Flex290IoProps}>
<Flex2 className="p-Product Flex287 bpt" {...Flex287Props} {...Flex287Cb} {...Flex287IoProps}>
<TextBox2 className="p-Product TextBox334 bpt" {...TextBox334Props} {...TextBox334Cb} {...TextBox334IoProps}/>
<Flex2 className="p-Product Flex283 bpt" {...Flex283Props} {...Flex283Cb} {...Flex283IoProps}>
<TextBox2 className="p-Product TextBox330 bpt" {...TextBox330Props} {...TextBox330Cb} {...TextBox330IoProps}/>
<TextBox2 className="p-Product TextBox329 bpt" {...TextBox329Props} {...TextBox329Cb} {...TextBox329IoProps}/>
<TextBox2 className="p-Product TextBox328 bpt" {...TextBox328Props} {...TextBox328Cb} {...TextBox328IoProps}/>
<TextBox2 className="p-Product TextBox327 bpt" {...TextBox327Props} {...TextBox327Cb} {...TextBox327IoProps}/>
<TextBox2 className="p-Product TextBox326 bpt" {...TextBox326Props} {...TextBox326Cb} {...TextBox326IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Product Flex286 bpt" {...Flex286Props} {...Flex286Cb} {...Flex286IoProps}>
<TextBox2 className="p-Product TextBox333 bpt" {...TextBox333Props} {...TextBox333Cb} {...TextBox333IoProps}/>
<Flex2 className="p-Product Flex282 bpt" {...Flex282Props} {...Flex282Cb} {...Flex282IoProps}>
<TextBox2 className="p-Product TextBox321 bpt" {...TextBox321Props} {...TextBox321Cb} {...TextBox321IoProps}/>
<TextBox2 className="p-Product TextBox322 bpt" {...TextBox322Props} {...TextBox322Cb} {...TextBox322IoProps}/>
<TextBox2 className="p-Product TextBox323 bpt" {...TextBox323Props} {...TextBox323Cb} {...TextBox323IoProps}/>
<TextBox2 className="p-Product TextBox324 bpt" {...TextBox324Props} {...TextBox324Cb} {...TextBox324IoProps}/>
<TextBox2 className="p-Product TextBox325 bpt" {...TextBox325Props} {...TextBox325Cb} {...TextBox325IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Product Flex285 bpt" {...Flex285Props} {...Flex285Cb} {...Flex285IoProps}>
<TextBox2 className="p-Product TextBox332 bpt" {...TextBox332Props} {...TextBox332Cb} {...TextBox332IoProps}/>
<Flex2 className="p-Product Flex281 bpt" {...Flex281Props} {...Flex281Cb} {...Flex281IoProps}>
<TextBox2 className="p-Product TextBox317 bpt" {...TextBox317Props} {...TextBox317Cb} {...TextBox317IoProps}/>
<TextBox2 className="p-Product TextBox318 bpt" {...TextBox318Props} {...TextBox318Cb} {...TextBox318IoProps}/>
<TextBox2 className="p-Product TextBox319 bpt" {...TextBox319Props} {...TextBox319Cb} {...TextBox319IoProps}/>
<TextBox2 className="p-Product TextBox320 bpt" {...TextBox320Props} {...TextBox320Cb} {...TextBox320IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Product Flex284 bpt" {...Flex284Props} {...Flex284Cb} {...Flex284IoProps}>
<TextBox2 className="p-Product TextBox331 bpt" {...TextBox331Props} {...TextBox331Cb} {...TextBox331IoProps}/>
<Flex2 className="p-Product Flex280 bpt" {...Flex280Props} {...Flex280Cb} {...Flex280IoProps}>
<TextBox2 className="p-Product TextBox316 bpt" {...TextBox316Props} {...TextBox316Cb} {...TextBox316IoProps}/>
<TextBox2 className="p-Product TextBox315 bpt" {...TextBox315Props} {...TextBox315Cb} {...TextBox315IoProps}/>
<TextBox2 className="p-Product TextBox314 bpt" {...TextBox314Props} {...TextBox314Cb} {...TextBox314IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Product Flex291 bpt" {...Flex291Props} {...Flex291Cb} {...Flex291IoProps}>
<Flex2 className="p-Product Flex289 bpt" {...Flex289Props} {...Flex289Cb} {...Flex289IoProps}>
<TextBox2 className="p-Product TextBox336 bpt" {...TextBox336Props} {...TextBox336Cb} {...TextBox336IoProps}/>
<TextBox2 className="p-Product TextBox335 bpt" {...TextBox335Props} {...TextBox335Cb} {...TextBox335IoProps}/>
</Flex2>
<Flex2 className="p-Product Flex288 bpt" {...Flex288Props} {...Flex288Cb} {...Flex288IoProps}>
<Image2 className="p-Product Image132 bpt" {...Image132Props} {...Image132Cb} {...Image132IoProps}/>
<Image2 className="p-Product Image131 bpt" {...Image131Props} {...Image131Cb} {...Image131IoProps}/>
<Image2 className="p-Product Image130 bpt" {...Image130Props} {...Image130Cb} {...Image130IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
  </>);
}
