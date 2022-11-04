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
import { Menu as Menu2 } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { useheadlineCb, useItem_infoCb, useFlex202Cb, useFlex201Cb, useFlex200Cb, useCartCb, useQuantityCb, usefeatures_containerCb, useFlex227Cb, useFlex226Cb, useFlex223Cb, useFlex224Cb, useFlex225Cb, usecommom_containerCb, useFlex242Cb, useFlex241Cb, useFlex238Cb, useFlex239Cb, useFlex240Cb, usereviewsCb, useFlex254Cb, useFlex253Cb, useFlex250Cb, useFlex256Cb, useFlex258Cb, useFlex257Cb, useFlex260Cb, useFlex259Cb, useFlex262Cb, useFlex261Cb, useFlex270Cb, useFlex269Cb, useFlex268Cb, useFlex264Cb, useFlex265Cb, useFlex266Cb, useshop_sectionCb, useFlex278Cb, useFlex277Cb, usebeanieCb, useFlex273Cb, useFlex357Cb, useFlex356Cb, useFlex359Cb, useFlex358Cb, usenewsletterCb, useFlex323Cb, useFlex322Cb, useFlex325Cb, usenavbarCb, useFlex353Cb, useFlex351Cb, useFlex352Cb, useFlex350Cb, useFooterCb, useFlex373Cb, useFlex371Cb, useFlex368Cb, useFlex369Cb, useFlex372Cb, useFlex370Cb, useFlex364Cb, useFlex360Cb, useFlex365Cb, useFlex361Cb, useFlex366Cb, useFlex362Cb, useFlex367Cb, useFlex363Cb, useTextBox210Cb, useImage82Cb, useTextBox218Cb, useTextBox219Cb, useTextBox220Cb, useTextBox221Cb, useTextBox222Cb, useDropdown17Cb, useButton15Cb, useTextBox226Cb, useInput1Cb, useTextBox256Cb, useImage92Cb, useTextBox257Cb, useTextBox258Cb, useImage93Cb, useTextBox259Cb, useTextBox260Cb, useImage94Cb, useTextBox261Cb, useTextBox281Cb, useTextBox275Cb, useTextBox276Cb, useTextBox277Cb, useTextBox278Cb, useTextBox279Cb, useTextBox280Cb, useTextBox295Cb, useTextBox289Cb, useTextBox290Cb, useImage104Cb, useImage105Cb, useImage106Cb, useImage107Cb, useImage108Cb, useTextBox296Cb, useTextBox297Cb, useImage109Cb, useImage110Cb, useImage111Cb, useImage112Cb, useImage113Cb, useTextBox298Cb, useTextBox299Cb, useImage114Cb, useImage115Cb, useImage116Cb, useImage117Cb, useImage118Cb, useTextBox300Cb, useTextBox301Cb, useImage119Cb, useImage120Cb, useImage121Cb, useImage122Cb, useImage123Cb, useImage124Cb, useTextBox304Cb, useImage125Cb, useTextBox305Cb, useTextBox306Cb, useImage126Cb, useButton17Cb, useTextBox313Cb, useImage129Cb, useTextBox311Cb, useTextBox312Cb, useTextBox413Cb, useTextBox414Cb, useImage155Cb, useTextBox415Cb, useTextBox416Cb, useImage156Cb, useTextBox383Cb, useTextBox384Cb, useInput3Cb, useButton18Cb, useImage153Cb, useTextBox409Cb, useDropdown21Cb, useDropdown22Cb, useTextBox410Cb, useMenu3Cb, useImage152Cb, useTextBox408Cb, useImage151Cb, useImage157Cb, useImage158Cb, useImage159Cb, useTextBox438Cb, useTextBox439Cb, useImage160Cb, useTextBox434Cb, useTextBox417Cb, useTextBox418Cb, useTextBox419Cb, useTextBox435Cb, useTextBox420Cb, useTextBox421Cb, useTextBox422Cb, useTextBox423Cb, useTextBox436Cb, useTextBox424Cb, useTextBox425Cb, useTextBox426Cb, useTextBox427Cb, useTextBox428Cb, useTextBox437Cb, useTextBox429Cb, useTextBox430Cb, useTextBox431Cb, useTextBox432Cb, useTextBox433Cb } from "../page-cbs/Product";
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
const beanieProps = useStore((state)=>state["Product"]["beanie"]);
const beanieIoProps = useIoStore((state)=>state["Product"]["beanie"]);
const beanieCb = usebeanieCb()
const Flex273Props = useStore((state)=>state["Product"]["Flex273"]);
const Flex273IoProps = useIoStore((state)=>state["Product"]["Flex273"]);
const Flex273Cb = useFlex273Cb()
const Flex357Props = useStore((state)=>state["Product"]["Flex357"]);
const Flex357IoProps = useIoStore((state)=>state["Product"]["Flex357"]);
const Flex357Cb = useFlex357Cb()
const Flex356Props = useStore((state)=>state["Product"]["Flex356"]);
const Flex356IoProps = useIoStore((state)=>state["Product"]["Flex356"]);
const Flex356Cb = useFlex356Cb()
const Flex359Props = useStore((state)=>state["Product"]["Flex359"]);
const Flex359IoProps = useIoStore((state)=>state["Product"]["Flex359"]);
const Flex359Cb = useFlex359Cb()
const Flex358Props = useStore((state)=>state["Product"]["Flex358"]);
const Flex358IoProps = useIoStore((state)=>state["Product"]["Flex358"]);
const Flex358Cb = useFlex358Cb()
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
const navbarProps = useStore((state)=>state["Product"]["navbar"]);
const navbarIoProps = useIoStore((state)=>state["Product"]["navbar"]);
const navbarCb = usenavbarCb()
const Flex353Props = useStore((state)=>state["Product"]["Flex353"]);
const Flex353IoProps = useIoStore((state)=>state["Product"]["Flex353"]);
const Flex353Cb = useFlex353Cb()
const Flex351Props = useStore((state)=>state["Product"]["Flex351"]);
const Flex351IoProps = useIoStore((state)=>state["Product"]["Flex351"]);
const Flex351Cb = useFlex351Cb()
const Flex352Props = useStore((state)=>state["Product"]["Flex352"]);
const Flex352IoProps = useIoStore((state)=>state["Product"]["Flex352"]);
const Flex352Cb = useFlex352Cb()
const Flex350Props = useStore((state)=>state["Product"]["Flex350"]);
const Flex350IoProps = useIoStore((state)=>state["Product"]["Flex350"]);
const Flex350Cb = useFlex350Cb()
const FooterProps = useStore((state)=>state["Product"]["Footer"]);
const FooterIoProps = useIoStore((state)=>state["Product"]["Footer"]);
const FooterCb = useFooterCb()
const Flex373Props = useStore((state)=>state["Product"]["Flex373"]);
const Flex373IoProps = useIoStore((state)=>state["Product"]["Flex373"]);
const Flex373Cb = useFlex373Cb()
const Flex371Props = useStore((state)=>state["Product"]["Flex371"]);
const Flex371IoProps = useIoStore((state)=>state["Product"]["Flex371"]);
const Flex371Cb = useFlex371Cb()
const Flex368Props = useStore((state)=>state["Product"]["Flex368"]);
const Flex368IoProps = useIoStore((state)=>state["Product"]["Flex368"]);
const Flex368Cb = useFlex368Cb()
const Flex369Props = useStore((state)=>state["Product"]["Flex369"]);
const Flex369IoProps = useIoStore((state)=>state["Product"]["Flex369"]);
const Flex369Cb = useFlex369Cb()
const Flex372Props = useStore((state)=>state["Product"]["Flex372"]);
const Flex372IoProps = useIoStore((state)=>state["Product"]["Flex372"]);
const Flex372Cb = useFlex372Cb()
const Flex370Props = useStore((state)=>state["Product"]["Flex370"]);
const Flex370IoProps = useIoStore((state)=>state["Product"]["Flex370"]);
const Flex370Cb = useFlex370Cb()
const Flex364Props = useStore((state)=>state["Product"]["Flex364"]);
const Flex364IoProps = useIoStore((state)=>state["Product"]["Flex364"]);
const Flex364Cb = useFlex364Cb()
const Flex360Props = useStore((state)=>state["Product"]["Flex360"]);
const Flex360IoProps = useIoStore((state)=>state["Product"]["Flex360"]);
const Flex360Cb = useFlex360Cb()
const Flex365Props = useStore((state)=>state["Product"]["Flex365"]);
const Flex365IoProps = useIoStore((state)=>state["Product"]["Flex365"]);
const Flex365Cb = useFlex365Cb()
const Flex361Props = useStore((state)=>state["Product"]["Flex361"]);
const Flex361IoProps = useIoStore((state)=>state["Product"]["Flex361"]);
const Flex361Cb = useFlex361Cb()
const Flex366Props = useStore((state)=>state["Product"]["Flex366"]);
const Flex366IoProps = useIoStore((state)=>state["Product"]["Flex366"]);
const Flex366Cb = useFlex366Cb()
const Flex362Props = useStore((state)=>state["Product"]["Flex362"]);
const Flex362IoProps = useIoStore((state)=>state["Product"]["Flex362"]);
const Flex362Cb = useFlex362Cb()
const Flex367Props = useStore((state)=>state["Product"]["Flex367"]);
const Flex367IoProps = useIoStore((state)=>state["Product"]["Flex367"]);
const Flex367Cb = useFlex367Cb()
const Flex363Props = useStore((state)=>state["Product"]["Flex363"]);
const Flex363IoProps = useIoStore((state)=>state["Product"]["Flex363"]);
const Flex363Cb = useFlex363Cb()
const TextBox210Props = useStore((state)=>state["Product"]["TextBox210"]);
const TextBox210IoProps = useIoStore((state)=>state["Product"]["TextBox210"]);
const TextBox210Cb = useTextBox210Cb()
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
const Image129Props = useStore((state)=>state["Product"]["Image129"]);
const Image129IoProps = useIoStore((state)=>state["Product"]["Image129"]);
const Image129Cb = useImage129Cb()
const TextBox311Props = useStore((state)=>state["Product"]["TextBox311"]);
const TextBox311IoProps = useIoStore((state)=>state["Product"]["TextBox311"]);
const TextBox311Cb = useTextBox311Cb()
const TextBox312Props = useStore((state)=>state["Product"]["TextBox312"]);
const TextBox312IoProps = useIoStore((state)=>state["Product"]["TextBox312"]);
const TextBox312Cb = useTextBox312Cb()
const TextBox413Props = useStore((state)=>state["Product"]["TextBox413"]);
const TextBox413IoProps = useIoStore((state)=>state["Product"]["TextBox413"]);
const TextBox413Cb = useTextBox413Cb()
const TextBox414Props = useStore((state)=>state["Product"]["TextBox414"]);
const TextBox414IoProps = useIoStore((state)=>state["Product"]["TextBox414"]);
const TextBox414Cb = useTextBox414Cb()
const Image155Props = useStore((state)=>state["Product"]["Image155"]);
const Image155IoProps = useIoStore((state)=>state["Product"]["Image155"]);
const Image155Cb = useImage155Cb()
const TextBox415Props = useStore((state)=>state["Product"]["TextBox415"]);
const TextBox415IoProps = useIoStore((state)=>state["Product"]["TextBox415"]);
const TextBox415Cb = useTextBox415Cb()
const TextBox416Props = useStore((state)=>state["Product"]["TextBox416"]);
const TextBox416IoProps = useIoStore((state)=>state["Product"]["TextBox416"]);
const TextBox416Cb = useTextBox416Cb()
const Image156Props = useStore((state)=>state["Product"]["Image156"]);
const Image156IoProps = useIoStore((state)=>state["Product"]["Image156"]);
const Image156Cb = useImage156Cb()
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
const Image153Props = useStore((state)=>state["Product"]["Image153"]);
const Image153IoProps = useIoStore((state)=>state["Product"]["Image153"]);
const Image153Cb = useImage153Cb()
const TextBox409Props = useStore((state)=>state["Product"]["TextBox409"]);
const TextBox409IoProps = useIoStore((state)=>state["Product"]["TextBox409"]);
const TextBox409Cb = useTextBox409Cb()
const Dropdown21Props = useStore((state)=>state["Product"]["Dropdown21"]);
const Dropdown21IoProps = useIoStore((state)=>state["Product"]["Dropdown21"]);
const Dropdown21Cb = useDropdown21Cb()
const Dropdown22Props = useStore((state)=>state["Product"]["Dropdown22"]);
const Dropdown22IoProps = useIoStore((state)=>state["Product"]["Dropdown22"]);
const Dropdown22Cb = useDropdown22Cb()
const TextBox410Props = useStore((state)=>state["Product"]["TextBox410"]);
const TextBox410IoProps = useIoStore((state)=>state["Product"]["TextBox410"]);
const TextBox410Cb = useTextBox410Cb()
const Menu3Props = useStore((state)=>state["Product"]["Menu3"]);
const Menu3IoProps = useIoStore((state)=>state["Product"]["Menu3"]);
const Menu3Cb = useMenu3Cb()
const Image152Props = useStore((state)=>state["Product"]["Image152"]);
const Image152IoProps = useIoStore((state)=>state["Product"]["Image152"]);
const Image152Cb = useImage152Cb()
const TextBox408Props = useStore((state)=>state["Product"]["TextBox408"]);
const TextBox408IoProps = useIoStore((state)=>state["Product"]["TextBox408"]);
const TextBox408Cb = useTextBox408Cb()
const Image151Props = useStore((state)=>state["Product"]["Image151"]);
const Image151IoProps = useIoStore((state)=>state["Product"]["Image151"]);
const Image151Cb = useImage151Cb()
const Image157Props = useStore((state)=>state["Product"]["Image157"]);
const Image157IoProps = useIoStore((state)=>state["Product"]["Image157"]);
const Image157Cb = useImage157Cb()
const Image158Props = useStore((state)=>state["Product"]["Image158"]);
const Image158IoProps = useIoStore((state)=>state["Product"]["Image158"]);
const Image158Cb = useImage158Cb()
const Image159Props = useStore((state)=>state["Product"]["Image159"]);
const Image159IoProps = useIoStore((state)=>state["Product"]["Image159"]);
const Image159Cb = useImage159Cb()
const TextBox438Props = useStore((state)=>state["Product"]["TextBox438"]);
const TextBox438IoProps = useIoStore((state)=>state["Product"]["TextBox438"]);
const TextBox438Cb = useTextBox438Cb()
const TextBox439Props = useStore((state)=>state["Product"]["TextBox439"]);
const TextBox439IoProps = useIoStore((state)=>state["Product"]["TextBox439"]);
const TextBox439Cb = useTextBox439Cb()
const Image160Props = useStore((state)=>state["Product"]["Image160"]);
const Image160IoProps = useIoStore((state)=>state["Product"]["Image160"]);
const Image160Cb = useImage160Cb()
const TextBox434Props = useStore((state)=>state["Product"]["TextBox434"]);
const TextBox434IoProps = useIoStore((state)=>state["Product"]["TextBox434"]);
const TextBox434Cb = useTextBox434Cb()
const TextBox417Props = useStore((state)=>state["Product"]["TextBox417"]);
const TextBox417IoProps = useIoStore((state)=>state["Product"]["TextBox417"]);
const TextBox417Cb = useTextBox417Cb()
const TextBox418Props = useStore((state)=>state["Product"]["TextBox418"]);
const TextBox418IoProps = useIoStore((state)=>state["Product"]["TextBox418"]);
const TextBox418Cb = useTextBox418Cb()
const TextBox419Props = useStore((state)=>state["Product"]["TextBox419"]);
const TextBox419IoProps = useIoStore((state)=>state["Product"]["TextBox419"]);
const TextBox419Cb = useTextBox419Cb()
const TextBox435Props = useStore((state)=>state["Product"]["TextBox435"]);
const TextBox435IoProps = useIoStore((state)=>state["Product"]["TextBox435"]);
const TextBox435Cb = useTextBox435Cb()
const TextBox420Props = useStore((state)=>state["Product"]["TextBox420"]);
const TextBox420IoProps = useIoStore((state)=>state["Product"]["TextBox420"]);
const TextBox420Cb = useTextBox420Cb()
const TextBox421Props = useStore((state)=>state["Product"]["TextBox421"]);
const TextBox421IoProps = useIoStore((state)=>state["Product"]["TextBox421"]);
const TextBox421Cb = useTextBox421Cb()
const TextBox422Props = useStore((state)=>state["Product"]["TextBox422"]);
const TextBox422IoProps = useIoStore((state)=>state["Product"]["TextBox422"]);
const TextBox422Cb = useTextBox422Cb()
const TextBox423Props = useStore((state)=>state["Product"]["TextBox423"]);
const TextBox423IoProps = useIoStore((state)=>state["Product"]["TextBox423"]);
const TextBox423Cb = useTextBox423Cb()
const TextBox436Props = useStore((state)=>state["Product"]["TextBox436"]);
const TextBox436IoProps = useIoStore((state)=>state["Product"]["TextBox436"]);
const TextBox436Cb = useTextBox436Cb()
const TextBox424Props = useStore((state)=>state["Product"]["TextBox424"]);
const TextBox424IoProps = useIoStore((state)=>state["Product"]["TextBox424"]);
const TextBox424Cb = useTextBox424Cb()
const TextBox425Props = useStore((state)=>state["Product"]["TextBox425"]);
const TextBox425IoProps = useIoStore((state)=>state["Product"]["TextBox425"]);
const TextBox425Cb = useTextBox425Cb()
const TextBox426Props = useStore((state)=>state["Product"]["TextBox426"]);
const TextBox426IoProps = useIoStore((state)=>state["Product"]["TextBox426"]);
const TextBox426Cb = useTextBox426Cb()
const TextBox427Props = useStore((state)=>state["Product"]["TextBox427"]);
const TextBox427IoProps = useIoStore((state)=>state["Product"]["TextBox427"]);
const TextBox427Cb = useTextBox427Cb()
const TextBox428Props = useStore((state)=>state["Product"]["TextBox428"]);
const TextBox428IoProps = useIoStore((state)=>state["Product"]["TextBox428"]);
const TextBox428Cb = useTextBox428Cb()
const TextBox437Props = useStore((state)=>state["Product"]["TextBox437"]);
const TextBox437IoProps = useIoStore((state)=>state["Product"]["TextBox437"]);
const TextBox437Cb = useTextBox437Cb()
const TextBox429Props = useStore((state)=>state["Product"]["TextBox429"]);
const TextBox429IoProps = useIoStore((state)=>state["Product"]["TextBox429"]);
const TextBox429Cb = useTextBox429Cb()
const TextBox430Props = useStore((state)=>state["Product"]["TextBox430"]);
const TextBox430IoProps = useIoStore((state)=>state["Product"]["TextBox430"]);
const TextBox430Cb = useTextBox430Cb()
const TextBox431Props = useStore((state)=>state["Product"]["TextBox431"]);
const TextBox431IoProps = useIoStore((state)=>state["Product"]["TextBox431"]);
const TextBox431Cb = useTextBox431Cb()
const TextBox432Props = useStore((state)=>state["Product"]["TextBox432"]);
const TextBox432IoProps = useIoStore((state)=>state["Product"]["TextBox432"]);
const TextBox432Cb = useTextBox432Cb()
const TextBox433Props = useStore((state)=>state["Product"]["TextBox433"]);
const TextBox433IoProps = useIoStore((state)=>state["Product"]["TextBox433"]);
const TextBox433Cb = useTextBox433Cb()

  return (<>
  <Flex2 className="p-Product headline bpt" {...headlineProps} {...headlineCb} {...headlineIoProps}>
<TextBox2 className="p-Product TextBox210 bpt" {...TextBox210Props} {...TextBox210Cb} {...TextBox210IoProps}/>
</Flex2>
<Flex2 className="p-Product navbar bpt" {...navbarProps} {...navbarCb} {...navbarIoProps}>
<Flex2 className="p-Product Flex353 bpt" {...Flex353Props} {...Flex353Cb} {...Flex353IoProps}>
<Flex2 className="p-Product Flex351 bpt" {...Flex351Props} {...Flex351Cb} {...Flex351IoProps}>
<TextBox2 className="p-Product TextBox410 bpt" {...TextBox410Props} {...TextBox410Cb} {...TextBox410IoProps}/>
<TextBox2 className="p-Product TextBox409 bpt" {...TextBox409Props} {...TextBox409Cb} {...TextBox409IoProps}/>
<Dropdown2 className="p-Product Dropdown22 bpt" {...Dropdown22Props} {...Dropdown22Cb} {...Dropdown22IoProps}/>
<Dropdown2 className="p-Product Dropdown21 bpt" {...Dropdown21Props} {...Dropdown21Cb} {...Dropdown21IoProps}/>
</Flex2>
<Image2 className="p-Product Image153 bpt" {...Image153Props} {...Image153Cb} {...Image153IoProps}/>
<Flex2 className="p-Product Flex352 bpt" {...Flex352Props} {...Flex352Cb} {...Flex352IoProps}>
<Image2 className="p-Product Image152 bpt" {...Image152Props} {...Image152Cb} {...Image152IoProps}/>
<Flex2 className="p-Product Flex350 bpt" {...Flex350Props} {...Flex350Cb} {...Flex350IoProps}>
<Image2 className="p-Product Image151 bpt" {...Image151Props} {...Image151Cb} {...Image151IoProps}/>
<TextBox2 className="p-Product TextBox408 bpt" {...TextBox408Props} {...TextBox408Cb} {...TextBox408IoProps}/>
</Flex2>
<Menu2 className="p-Product Menu3 bpt" {...Menu3Props} {...Menu3Cb} {...Menu3IoProps}/>
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
<Flex2 className="p-Product beanie bpt" {...beanieProps} {...beanieCb} {...beanieIoProps}>
<Flex2 className="p-Product Flex273 bpt" {...Flex273Props} {...Flex273Cb} {...Flex273IoProps}>
<Image2 className="p-Product Image129 bpt" {...Image129Props} {...Image129Cb} {...Image129IoProps}/>
<TextBox2 className="p-Product TextBox312 bpt" {...TextBox312Props} {...TextBox312Cb} {...TextBox312IoProps}/>
<TextBox2 className="p-Product TextBox311 bpt" {...TextBox311Props} {...TextBox311Cb} {...TextBox311IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Product Flex357 bpt" {...Flex357Props} {...Flex357Cb} {...Flex357IoProps}>
<Flex2 className="p-Product Flex356 bpt" {...Flex356Props} {...Flex356Cb} {...Flex356IoProps}>
<Image2 className="p-Product Image155 bpt" {...Image155Props} {...Image155Cb} {...Image155IoProps}/>
<TextBox2 className="p-Product TextBox413 bpt" {...TextBox413Props} {...TextBox413Cb} {...TextBox413IoProps}/>
<TextBox2 className="p-Product TextBox414 bpt" {...TextBox414Props} {...TextBox414Cb} {...TextBox414IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Product Flex359 bpt" {...Flex359Props} {...Flex359Cb} {...Flex359IoProps}>
<Flex2 className="p-Product Flex358 bpt" {...Flex358Props} {...Flex358Cb} {...Flex358IoProps}>
<Image2 className="p-Product Image156 bpt" {...Image156Props} {...Image156Cb} {...Image156IoProps}/>
<TextBox2 className="p-Product TextBox415 bpt" {...TextBox415Props} {...TextBox415Cb} {...TextBox415IoProps}/>
<TextBox2 className="p-Product TextBox416 bpt" {...TextBox416Props} {...TextBox416Cb} {...TextBox416IoProps}/>
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
<Flex2 className="p-Product Flex373 bpt" {...Flex373Props} {...Flex373Cb} {...Flex373IoProps}>
<Flex2 className="p-Product Flex372 bpt" {...Flex372Props} {...Flex372Cb} {...Flex372IoProps}>
<Image2 className="p-Product Image160 bpt" {...Image160Props} {...Image160Cb} {...Image160IoProps}/>
<Flex2 className="p-Product Flex370 bpt" {...Flex370Props} {...Flex370Cb} {...Flex370IoProps}>
<Flex2 className="p-Product Flex367 bpt" {...Flex367Props} {...Flex367Cb} {...Flex367IoProps}>
<TextBox2 className="p-Product TextBox437 bpt" {...TextBox437Props} {...TextBox437Cb} {...TextBox437IoProps}/>
<Flex2 className="p-Product Flex363 bpt" {...Flex363Props} {...Flex363Cb} {...Flex363IoProps}>
<TextBox2 className="p-Product TextBox433 bpt" {...TextBox433Props} {...TextBox433Cb} {...TextBox433IoProps}/>
<TextBox2 className="p-Product TextBox432 bpt" {...TextBox432Props} {...TextBox432Cb} {...TextBox432IoProps}/>
<TextBox2 className="p-Product TextBox431 bpt" {...TextBox431Props} {...TextBox431Cb} {...TextBox431IoProps}/>
<TextBox2 className="p-Product TextBox430 bpt" {...TextBox430Props} {...TextBox430Cb} {...TextBox430IoProps}/>
<TextBox2 className="p-Product TextBox429 bpt" {...TextBox429Props} {...TextBox429Cb} {...TextBox429IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Product Flex366 bpt" {...Flex366Props} {...Flex366Cb} {...Flex366IoProps}>
<TextBox2 className="p-Product TextBox436 bpt" {...TextBox436Props} {...TextBox436Cb} {...TextBox436IoProps}/>
<Flex2 className="p-Product Flex362 bpt" {...Flex362Props} {...Flex362Cb} {...Flex362IoProps}>
<TextBox2 className="p-Product TextBox424 bpt" {...TextBox424Props} {...TextBox424Cb} {...TextBox424IoProps}/>
<TextBox2 className="p-Product TextBox425 bpt" {...TextBox425Props} {...TextBox425Cb} {...TextBox425IoProps}/>
<TextBox2 className="p-Product TextBox426 bpt" {...TextBox426Props} {...TextBox426Cb} {...TextBox426IoProps}/>
<TextBox2 className="p-Product TextBox427 bpt" {...TextBox427Props} {...TextBox427Cb} {...TextBox427IoProps}/>
<TextBox2 className="p-Product TextBox428 bpt" {...TextBox428Props} {...TextBox428Cb} {...TextBox428IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Product Flex365 bpt" {...Flex365Props} {...Flex365Cb} {...Flex365IoProps}>
<TextBox2 className="p-Product TextBox435 bpt" {...TextBox435Props} {...TextBox435Cb} {...TextBox435IoProps}/>
<Flex2 className="p-Product Flex361 bpt" {...Flex361Props} {...Flex361Cb} {...Flex361IoProps}>
<TextBox2 className="p-Product TextBox420 bpt" {...TextBox420Props} {...TextBox420Cb} {...TextBox420IoProps}/>
<TextBox2 className="p-Product TextBox421 bpt" {...TextBox421Props} {...TextBox421Cb} {...TextBox421IoProps}/>
<TextBox2 className="p-Product TextBox422 bpt" {...TextBox422Props} {...TextBox422Cb} {...TextBox422IoProps}/>
<TextBox2 className="p-Product TextBox423 bpt" {...TextBox423Props} {...TextBox423Cb} {...TextBox423IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Product Flex364 bpt" {...Flex364Props} {...Flex364Cb} {...Flex364IoProps}>
<TextBox2 className="p-Product TextBox434 bpt" {...TextBox434Props} {...TextBox434Cb} {...TextBox434IoProps}/>
<Flex2 className="p-Product Flex360 bpt" {...Flex360Props} {...Flex360Cb} {...Flex360IoProps}>
<TextBox2 className="p-Product TextBox419 bpt" {...TextBox419Props} {...TextBox419Cb} {...TextBox419IoProps}/>
<TextBox2 className="p-Product TextBox418 bpt" {...TextBox418Props} {...TextBox418Cb} {...TextBox418IoProps}/>
<TextBox2 className="p-Product TextBox417 bpt" {...TextBox417Props} {...TextBox417Cb} {...TextBox417IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Product Flex371 bpt" {...Flex371Props} {...Flex371Cb} {...Flex371IoProps}>
<Flex2 className="p-Product Flex369 bpt" {...Flex369Props} {...Flex369Cb} {...Flex369IoProps}>
<TextBox2 className="p-Product TextBox439 bpt" {...TextBox439Props} {...TextBox439Cb} {...TextBox439IoProps}/>
<TextBox2 className="p-Product TextBox438 bpt" {...TextBox438Props} {...TextBox438Cb} {...TextBox438IoProps}/>
</Flex2>
<Flex2 className="p-Product Flex368 bpt" {...Flex368Props} {...Flex368Cb} {...Flex368IoProps}>
<Image2 className="p-Product Image159 bpt" {...Image159Props} {...Image159Cb} {...Image159IoProps}/>
<Image2 className="p-Product Image158 bpt" {...Image158Props} {...Image158Cb} {...Image158IoProps}/>
<Image2 className="p-Product Image157 bpt" {...Image157Props} {...Image157Cb} {...Image157IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
  </>);
}
