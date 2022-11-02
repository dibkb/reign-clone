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
import { useheadlineCb, usenavbarCb, useFlex196Cb, useFlex194Cb, useFlex193Cb, useFlex195Cb, useItem_infoCb, useFlex202Cb, useFlex201Cb, useFlex200Cb, useCartCb, useQuantityCb, usefeatures_containerCb, useFlex227Cb, useFlex226Cb, useFlex223Cb, useFlex224Cb, useFlex225Cb, useCommon_QuestionsCb, useFlex231Cb, useFlex228Cb, useFlex229Cb, useFlex230Cb, useTextBox210Cb, useImage81Cb, useImage80Cb, useTextBox211Cb, useImage79Cb, useDropdown14Cb, useDropdown15Cb, useTextBox212Cb, useTextBox213Cb, useImage82Cb, useTextBox218Cb, useTextBox219Cb, useTextBox220Cb, useTextBox221Cb, useTextBox222Cb, useDropdown17Cb, useButton15Cb, useTextBox226Cb, useInput1Cb, useTextBox256Cb, useImage92Cb, useTextBox257Cb, useTextBox258Cb, useImage93Cb, useTextBox259Cb, useTextBox260Cb, useImage94Cb, useTextBox261Cb, useTextBox262Cb, useImage95Cb, useTextBox263Cb, useTextBox264Cb, useImage96Cb, useTextBox265Cb, useTextBox266Cb, useImage97Cb, useTextBox267Cb } from "../page-cbs/Product";
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
const Common_QuestionsProps = useStore((state)=>state["Product"]["Common_Questions"]);
const Common_QuestionsIoProps = useIoStore((state)=>state["Product"]["Common_Questions"]);
const Common_QuestionsCb = useCommon_QuestionsCb()
const Flex231Props = useStore((state)=>state["Product"]["Flex231"]);
const Flex231IoProps = useIoStore((state)=>state["Product"]["Flex231"]);
const Flex231Cb = useFlex231Cb()
const Flex228Props = useStore((state)=>state["Product"]["Flex228"]);
const Flex228IoProps = useIoStore((state)=>state["Product"]["Flex228"]);
const Flex228Cb = useFlex228Cb()
const Flex229Props = useStore((state)=>state["Product"]["Flex229"]);
const Flex229IoProps = useIoStore((state)=>state["Product"]["Flex229"]);
const Flex229Cb = useFlex229Cb()
const Flex230Props = useStore((state)=>state["Product"]["Flex230"]);
const Flex230IoProps = useIoStore((state)=>state["Product"]["Flex230"]);
const Flex230Cb = useFlex230Cb()
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
const TextBox262Props = useStore((state)=>state["Product"]["TextBox262"]);
const TextBox262IoProps = useIoStore((state)=>state["Product"]["TextBox262"]);
const TextBox262Cb = useTextBox262Cb()
const Image95Props = useStore((state)=>state["Product"]["Image95"]);
const Image95IoProps = useIoStore((state)=>state["Product"]["Image95"]);
const Image95Cb = useImage95Cb()
const TextBox263Props = useStore((state)=>state["Product"]["TextBox263"]);
const TextBox263IoProps = useIoStore((state)=>state["Product"]["TextBox263"]);
const TextBox263Cb = useTextBox263Cb()
const TextBox264Props = useStore((state)=>state["Product"]["TextBox264"]);
const TextBox264IoProps = useIoStore((state)=>state["Product"]["TextBox264"]);
const TextBox264Cb = useTextBox264Cb()
const Image96Props = useStore((state)=>state["Product"]["Image96"]);
const Image96IoProps = useIoStore((state)=>state["Product"]["Image96"]);
const Image96Cb = useImage96Cb()
const TextBox265Props = useStore((state)=>state["Product"]["TextBox265"]);
const TextBox265IoProps = useIoStore((state)=>state["Product"]["TextBox265"]);
const TextBox265Cb = useTextBox265Cb()
const TextBox266Props = useStore((state)=>state["Product"]["TextBox266"]);
const TextBox266IoProps = useIoStore((state)=>state["Product"]["TextBox266"]);
const TextBox266Cb = useTextBox266Cb()
const Image97Props = useStore((state)=>state["Product"]["Image97"]);
const Image97IoProps = useIoStore((state)=>state["Product"]["Image97"]);
const Image97Cb = useImage97Cb()
const TextBox267Props = useStore((state)=>state["Product"]["TextBox267"]);
const TextBox267IoProps = useIoStore((state)=>state["Product"]["TextBox267"]);
const TextBox267Cb = useTextBox267Cb()

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
<Flex2 className="p-Product Common_Questions bpt" {...Common_QuestionsProps} {...Common_QuestionsCb} {...Common_QuestionsIoProps}>
<Flex2 className="p-Product Flex231 bpt" {...Flex231Props} {...Flex231Cb} {...Flex231IoProps}>
<Flex2 className="p-Product Flex230 bpt" {...Flex230Props} {...Flex230Cb} {...Flex230IoProps}>
<Image2 className="p-Product Image97 bpt" {...Image97Props} {...Image97Cb} {...Image97IoProps}/>
<TextBox2 className="p-Product TextBox267 bpt" {...TextBox267Props} {...TextBox267Cb} {...TextBox267IoProps}/>
<TextBox2 className="p-Product TextBox266 bpt" {...TextBox266Props} {...TextBox266Cb} {...TextBox266IoProps}/>
</Flex2>
<Flex2 className="p-Product Flex229 bpt" {...Flex229Props} {...Flex229Cb} {...Flex229IoProps}>
<Image2 className="p-Product Image96 bpt" {...Image96Props} {...Image96Cb} {...Image96IoProps}/>
<TextBox2 className="p-Product TextBox264 bpt" {...TextBox264Props} {...TextBox264Cb} {...TextBox264IoProps}/>
<TextBox2 className="p-Product TextBox265 bpt" {...TextBox265Props} {...TextBox265Cb} {...TextBox265IoProps}/>
</Flex2>
<Flex2 className="p-Product Flex228 bpt" {...Flex228Props} {...Flex228Cb} {...Flex228IoProps}>
<Image2 className="p-Product Image95 bpt" {...Image95Props} {...Image95Cb} {...Image95IoProps}/>
<TextBox2 className="p-Product TextBox262 bpt" {...TextBox262Props} {...TextBox262Cb} {...TextBox262IoProps}/>
<TextBox2 className="p-Product TextBox263 bpt" {...TextBox263Props} {...TextBox263Cb} {...TextBox263IoProps}/>
</Flex2>
</Flex2>
</Flex2>
  </>);
}
