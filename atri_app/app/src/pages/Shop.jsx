import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Dropdown as Dropdown1 } from "@atrilabs/react-component-manifests/src/manifests/Dropdown/Dropdown.tsx";
import { useheadlineCb, usefooterCb, useFlex141Cb, useFlex139Cb, useFlex136Cb, useFlex137Cb, useFlex140Cb, useFlex138Cb, useFlex132Cb, useFlex128Cb, useFlex133Cb, useFlex129Cb, useFlex134Cb, useFlex130Cb, useFlex135Cb, useFlex131Cb, usebannerCb, useFlex145Cb, useFlex144Cb, useFlex143Cb, useshopsectionCb, useFlex154Cb, useFlex153Cb, useFlex150Cb, useFlex147Cb, useFlex151Cb, useFlex148Cb, useFlex152Cb, useFlex149Cb, useFlex163Cb, useFlex162Cb, useFlex169Cb, useFlex168Cb, useFlex171Cb, useFlex170Cb, usenavbarCb, useFlex190Cb, useFlex188Cb, useFlex187Cb, useFlex189Cb, useTextBox149Cb, useImage51Cb, useImage52Cb, useImage53Cb, useTextBox174Cb, useTextBox175Cb, useImage54Cb, useTextBox170Cb, useTextBox153Cb, useTextBox154Cb, useTextBox155Cb, useTextBox171Cb, useTextBox156Cb, useTextBox157Cb, useTextBox158Cb, useTextBox159Cb, useTextBox172Cb, useTextBox160Cb, useTextBox161Cb, useTextBox162Cb, useTextBox163Cb, useTextBox164Cb, useTextBox173Cb, useTextBox165Cb, useTextBox166Cb, useTextBox167Cb, useTextBox168Cb, useTextBox169Cb, useTextBox176Cb, useTextBox177Cb, useTextBox178Cb, useTextBox179Cb, useTextBox180Cb, useImage56Cb, useTextBox181Cb, useTextBox182Cb, useImage57Cb, useImage58Cb, useTextBox183Cb, useTextBox184Cb, useImage62Cb, useTextBox192Cb, useTextBox193Cb, useTextBox198Cb, useTextBox199Cb, useImage65Cb, useTextBox200Cb, useTextBox201Cb, useImage66Cb, useImage78Cb, useImage77Cb, useTextBox208Cb, useImage76Cb, useDropdown12Cb, useDropdown13Cb, useTextBox209Cb, useTextBox215Cb } from "../page-cbs/Shop";
import "../page-css/Shop.css";
import "../custom/Shop";

export default function Shop() {
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

  const headlineProps = useStore((state)=>state["Shop"]["headline"]);
const headlineIoProps = useIoStore((state)=>state["Shop"]["headline"]);
const headlineCb = useheadlineCb()
const footerProps = useStore((state)=>state["Shop"]["footer"]);
const footerIoProps = useIoStore((state)=>state["Shop"]["footer"]);
const footerCb = usefooterCb()
const Flex141Props = useStore((state)=>state["Shop"]["Flex141"]);
const Flex141IoProps = useIoStore((state)=>state["Shop"]["Flex141"]);
const Flex141Cb = useFlex141Cb()
const Flex139Props = useStore((state)=>state["Shop"]["Flex139"]);
const Flex139IoProps = useIoStore((state)=>state["Shop"]["Flex139"]);
const Flex139Cb = useFlex139Cb()
const Flex136Props = useStore((state)=>state["Shop"]["Flex136"]);
const Flex136IoProps = useIoStore((state)=>state["Shop"]["Flex136"]);
const Flex136Cb = useFlex136Cb()
const Flex137Props = useStore((state)=>state["Shop"]["Flex137"]);
const Flex137IoProps = useIoStore((state)=>state["Shop"]["Flex137"]);
const Flex137Cb = useFlex137Cb()
const Flex140Props = useStore((state)=>state["Shop"]["Flex140"]);
const Flex140IoProps = useIoStore((state)=>state["Shop"]["Flex140"]);
const Flex140Cb = useFlex140Cb()
const Flex138Props = useStore((state)=>state["Shop"]["Flex138"]);
const Flex138IoProps = useIoStore((state)=>state["Shop"]["Flex138"]);
const Flex138Cb = useFlex138Cb()
const Flex132Props = useStore((state)=>state["Shop"]["Flex132"]);
const Flex132IoProps = useIoStore((state)=>state["Shop"]["Flex132"]);
const Flex132Cb = useFlex132Cb()
const Flex128Props = useStore((state)=>state["Shop"]["Flex128"]);
const Flex128IoProps = useIoStore((state)=>state["Shop"]["Flex128"]);
const Flex128Cb = useFlex128Cb()
const Flex133Props = useStore((state)=>state["Shop"]["Flex133"]);
const Flex133IoProps = useIoStore((state)=>state["Shop"]["Flex133"]);
const Flex133Cb = useFlex133Cb()
const Flex129Props = useStore((state)=>state["Shop"]["Flex129"]);
const Flex129IoProps = useIoStore((state)=>state["Shop"]["Flex129"]);
const Flex129Cb = useFlex129Cb()
const Flex134Props = useStore((state)=>state["Shop"]["Flex134"]);
const Flex134IoProps = useIoStore((state)=>state["Shop"]["Flex134"]);
const Flex134Cb = useFlex134Cb()
const Flex130Props = useStore((state)=>state["Shop"]["Flex130"]);
const Flex130IoProps = useIoStore((state)=>state["Shop"]["Flex130"]);
const Flex130Cb = useFlex130Cb()
const Flex135Props = useStore((state)=>state["Shop"]["Flex135"]);
const Flex135IoProps = useIoStore((state)=>state["Shop"]["Flex135"]);
const Flex135Cb = useFlex135Cb()
const Flex131Props = useStore((state)=>state["Shop"]["Flex131"]);
const Flex131IoProps = useIoStore((state)=>state["Shop"]["Flex131"]);
const Flex131Cb = useFlex131Cb()
const bannerProps = useStore((state)=>state["Shop"]["banner"]);
const bannerIoProps = useIoStore((state)=>state["Shop"]["banner"]);
const bannerCb = usebannerCb()
const Flex145Props = useStore((state)=>state["Shop"]["Flex145"]);
const Flex145IoProps = useIoStore((state)=>state["Shop"]["Flex145"]);
const Flex145Cb = useFlex145Cb()
const Flex144Props = useStore((state)=>state["Shop"]["Flex144"]);
const Flex144IoProps = useIoStore((state)=>state["Shop"]["Flex144"]);
const Flex144Cb = useFlex144Cb()
const Flex143Props = useStore((state)=>state["Shop"]["Flex143"]);
const Flex143IoProps = useIoStore((state)=>state["Shop"]["Flex143"]);
const Flex143Cb = useFlex143Cb()
const shopsectionProps = useStore((state)=>state["Shop"]["shopsection"]);
const shopsectionIoProps = useIoStore((state)=>state["Shop"]["shopsection"]);
const shopsectionCb = useshopsectionCb()
const Flex154Props = useStore((state)=>state["Shop"]["Flex154"]);
const Flex154IoProps = useIoStore((state)=>state["Shop"]["Flex154"]);
const Flex154Cb = useFlex154Cb()
const Flex153Props = useStore((state)=>state["Shop"]["Flex153"]);
const Flex153IoProps = useIoStore((state)=>state["Shop"]["Flex153"]);
const Flex153Cb = useFlex153Cb()
const Flex150Props = useStore((state)=>state["Shop"]["Flex150"]);
const Flex150IoProps = useIoStore((state)=>state["Shop"]["Flex150"]);
const Flex150Cb = useFlex150Cb()
const Flex147Props = useStore((state)=>state["Shop"]["Flex147"]);
const Flex147IoProps = useIoStore((state)=>state["Shop"]["Flex147"]);
const Flex147Cb = useFlex147Cb()
const Flex151Props = useStore((state)=>state["Shop"]["Flex151"]);
const Flex151IoProps = useIoStore((state)=>state["Shop"]["Flex151"]);
const Flex151Cb = useFlex151Cb()
const Flex148Props = useStore((state)=>state["Shop"]["Flex148"]);
const Flex148IoProps = useIoStore((state)=>state["Shop"]["Flex148"]);
const Flex148Cb = useFlex148Cb()
const Flex152Props = useStore((state)=>state["Shop"]["Flex152"]);
const Flex152IoProps = useIoStore((state)=>state["Shop"]["Flex152"]);
const Flex152Cb = useFlex152Cb()
const Flex149Props = useStore((state)=>state["Shop"]["Flex149"]);
const Flex149IoProps = useIoStore((state)=>state["Shop"]["Flex149"]);
const Flex149Cb = useFlex149Cb()
const Flex163Props = useStore((state)=>state["Shop"]["Flex163"]);
const Flex163IoProps = useIoStore((state)=>state["Shop"]["Flex163"]);
const Flex163Cb = useFlex163Cb()
const Flex162Props = useStore((state)=>state["Shop"]["Flex162"]);
const Flex162IoProps = useIoStore((state)=>state["Shop"]["Flex162"]);
const Flex162Cb = useFlex162Cb()
const Flex169Props = useStore((state)=>state["Shop"]["Flex169"]);
const Flex169IoProps = useIoStore((state)=>state["Shop"]["Flex169"]);
const Flex169Cb = useFlex169Cb()
const Flex168Props = useStore((state)=>state["Shop"]["Flex168"]);
const Flex168IoProps = useIoStore((state)=>state["Shop"]["Flex168"]);
const Flex168Cb = useFlex168Cb()
const Flex171Props = useStore((state)=>state["Shop"]["Flex171"]);
const Flex171IoProps = useIoStore((state)=>state["Shop"]["Flex171"]);
const Flex171Cb = useFlex171Cb()
const Flex170Props = useStore((state)=>state["Shop"]["Flex170"]);
const Flex170IoProps = useIoStore((state)=>state["Shop"]["Flex170"]);
const Flex170Cb = useFlex170Cb()
const navbarProps = useStore((state)=>state["Shop"]["navbar"]);
const navbarIoProps = useIoStore((state)=>state["Shop"]["navbar"]);
const navbarCb = usenavbarCb()
const Flex190Props = useStore((state)=>state["Shop"]["Flex190"]);
const Flex190IoProps = useIoStore((state)=>state["Shop"]["Flex190"]);
const Flex190Cb = useFlex190Cb()
const Flex188Props = useStore((state)=>state["Shop"]["Flex188"]);
const Flex188IoProps = useIoStore((state)=>state["Shop"]["Flex188"]);
const Flex188Cb = useFlex188Cb()
const Flex187Props = useStore((state)=>state["Shop"]["Flex187"]);
const Flex187IoProps = useIoStore((state)=>state["Shop"]["Flex187"]);
const Flex187Cb = useFlex187Cb()
const Flex189Props = useStore((state)=>state["Shop"]["Flex189"]);
const Flex189IoProps = useIoStore((state)=>state["Shop"]["Flex189"]);
const Flex189Cb = useFlex189Cb()
const TextBox149Props = useStore((state)=>state["Shop"]["TextBox149"]);
const TextBox149IoProps = useIoStore((state)=>state["Shop"]["TextBox149"]);
const TextBox149Cb = useTextBox149Cb()
const Image51Props = useStore((state)=>state["Shop"]["Image51"]);
const Image51IoProps = useIoStore((state)=>state["Shop"]["Image51"]);
const Image51Cb = useImage51Cb()
const Image52Props = useStore((state)=>state["Shop"]["Image52"]);
const Image52IoProps = useIoStore((state)=>state["Shop"]["Image52"]);
const Image52Cb = useImage52Cb()
const Image53Props = useStore((state)=>state["Shop"]["Image53"]);
const Image53IoProps = useIoStore((state)=>state["Shop"]["Image53"]);
const Image53Cb = useImage53Cb()
const TextBox174Props = useStore((state)=>state["Shop"]["TextBox174"]);
const TextBox174IoProps = useIoStore((state)=>state["Shop"]["TextBox174"]);
const TextBox174Cb = useTextBox174Cb()
const TextBox175Props = useStore((state)=>state["Shop"]["TextBox175"]);
const TextBox175IoProps = useIoStore((state)=>state["Shop"]["TextBox175"]);
const TextBox175Cb = useTextBox175Cb()
const Image54Props = useStore((state)=>state["Shop"]["Image54"]);
const Image54IoProps = useIoStore((state)=>state["Shop"]["Image54"]);
const Image54Cb = useImage54Cb()
const TextBox170Props = useStore((state)=>state["Shop"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["Shop"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const TextBox153Props = useStore((state)=>state["Shop"]["TextBox153"]);
const TextBox153IoProps = useIoStore((state)=>state["Shop"]["TextBox153"]);
const TextBox153Cb = useTextBox153Cb()
const TextBox154Props = useStore((state)=>state["Shop"]["TextBox154"]);
const TextBox154IoProps = useIoStore((state)=>state["Shop"]["TextBox154"]);
const TextBox154Cb = useTextBox154Cb()
const TextBox155Props = useStore((state)=>state["Shop"]["TextBox155"]);
const TextBox155IoProps = useIoStore((state)=>state["Shop"]["TextBox155"]);
const TextBox155Cb = useTextBox155Cb()
const TextBox171Props = useStore((state)=>state["Shop"]["TextBox171"]);
const TextBox171IoProps = useIoStore((state)=>state["Shop"]["TextBox171"]);
const TextBox171Cb = useTextBox171Cb()
const TextBox156Props = useStore((state)=>state["Shop"]["TextBox156"]);
const TextBox156IoProps = useIoStore((state)=>state["Shop"]["TextBox156"]);
const TextBox156Cb = useTextBox156Cb()
const TextBox157Props = useStore((state)=>state["Shop"]["TextBox157"]);
const TextBox157IoProps = useIoStore((state)=>state["Shop"]["TextBox157"]);
const TextBox157Cb = useTextBox157Cb()
const TextBox158Props = useStore((state)=>state["Shop"]["TextBox158"]);
const TextBox158IoProps = useIoStore((state)=>state["Shop"]["TextBox158"]);
const TextBox158Cb = useTextBox158Cb()
const TextBox159Props = useStore((state)=>state["Shop"]["TextBox159"]);
const TextBox159IoProps = useIoStore((state)=>state["Shop"]["TextBox159"]);
const TextBox159Cb = useTextBox159Cb()
const TextBox172Props = useStore((state)=>state["Shop"]["TextBox172"]);
const TextBox172IoProps = useIoStore((state)=>state["Shop"]["TextBox172"]);
const TextBox172Cb = useTextBox172Cb()
const TextBox160Props = useStore((state)=>state["Shop"]["TextBox160"]);
const TextBox160IoProps = useIoStore((state)=>state["Shop"]["TextBox160"]);
const TextBox160Cb = useTextBox160Cb()
const TextBox161Props = useStore((state)=>state["Shop"]["TextBox161"]);
const TextBox161IoProps = useIoStore((state)=>state["Shop"]["TextBox161"]);
const TextBox161Cb = useTextBox161Cb()
const TextBox162Props = useStore((state)=>state["Shop"]["TextBox162"]);
const TextBox162IoProps = useIoStore((state)=>state["Shop"]["TextBox162"]);
const TextBox162Cb = useTextBox162Cb()
const TextBox163Props = useStore((state)=>state["Shop"]["TextBox163"]);
const TextBox163IoProps = useIoStore((state)=>state["Shop"]["TextBox163"]);
const TextBox163Cb = useTextBox163Cb()
const TextBox164Props = useStore((state)=>state["Shop"]["TextBox164"]);
const TextBox164IoProps = useIoStore((state)=>state["Shop"]["TextBox164"]);
const TextBox164Cb = useTextBox164Cb()
const TextBox173Props = useStore((state)=>state["Shop"]["TextBox173"]);
const TextBox173IoProps = useIoStore((state)=>state["Shop"]["TextBox173"]);
const TextBox173Cb = useTextBox173Cb()
const TextBox165Props = useStore((state)=>state["Shop"]["TextBox165"]);
const TextBox165IoProps = useIoStore((state)=>state["Shop"]["TextBox165"]);
const TextBox165Cb = useTextBox165Cb()
const TextBox166Props = useStore((state)=>state["Shop"]["TextBox166"]);
const TextBox166IoProps = useIoStore((state)=>state["Shop"]["TextBox166"]);
const TextBox166Cb = useTextBox166Cb()
const TextBox167Props = useStore((state)=>state["Shop"]["TextBox167"]);
const TextBox167IoProps = useIoStore((state)=>state["Shop"]["TextBox167"]);
const TextBox167Cb = useTextBox167Cb()
const TextBox168Props = useStore((state)=>state["Shop"]["TextBox168"]);
const TextBox168IoProps = useIoStore((state)=>state["Shop"]["TextBox168"]);
const TextBox168Cb = useTextBox168Cb()
const TextBox169Props = useStore((state)=>state["Shop"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["Shop"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const TextBox176Props = useStore((state)=>state["Shop"]["TextBox176"]);
const TextBox176IoProps = useIoStore((state)=>state["Shop"]["TextBox176"]);
const TextBox176Cb = useTextBox176Cb()
const TextBox177Props = useStore((state)=>state["Shop"]["TextBox177"]);
const TextBox177IoProps = useIoStore((state)=>state["Shop"]["TextBox177"]);
const TextBox177Cb = useTextBox177Cb()
const TextBox178Props = useStore((state)=>state["Shop"]["TextBox178"]);
const TextBox178IoProps = useIoStore((state)=>state["Shop"]["TextBox178"]);
const TextBox178Cb = useTextBox178Cb()
const TextBox179Props = useStore((state)=>state["Shop"]["TextBox179"]);
const TextBox179IoProps = useIoStore((state)=>state["Shop"]["TextBox179"]);
const TextBox179Cb = useTextBox179Cb()
const TextBox180Props = useStore((state)=>state["Shop"]["TextBox180"]);
const TextBox180IoProps = useIoStore((state)=>state["Shop"]["TextBox180"]);
const TextBox180Cb = useTextBox180Cb()
const Image56Props = useStore((state)=>state["Shop"]["Image56"]);
const Image56IoProps = useIoStore((state)=>state["Shop"]["Image56"]);
const Image56Cb = useImage56Cb()
const TextBox181Props = useStore((state)=>state["Shop"]["TextBox181"]);
const TextBox181IoProps = useIoStore((state)=>state["Shop"]["TextBox181"]);
const TextBox181Cb = useTextBox181Cb()
const TextBox182Props = useStore((state)=>state["Shop"]["TextBox182"]);
const TextBox182IoProps = useIoStore((state)=>state["Shop"]["TextBox182"]);
const TextBox182Cb = useTextBox182Cb()
const Image57Props = useStore((state)=>state["Shop"]["Image57"]);
const Image57IoProps = useIoStore((state)=>state["Shop"]["Image57"]);
const Image57Cb = useImage57Cb()
const Image58Props = useStore((state)=>state["Shop"]["Image58"]);
const Image58IoProps = useIoStore((state)=>state["Shop"]["Image58"]);
const Image58Cb = useImage58Cb()
const TextBox183Props = useStore((state)=>state["Shop"]["TextBox183"]);
const TextBox183IoProps = useIoStore((state)=>state["Shop"]["TextBox183"]);
const TextBox183Cb = useTextBox183Cb()
const TextBox184Props = useStore((state)=>state["Shop"]["TextBox184"]);
const TextBox184IoProps = useIoStore((state)=>state["Shop"]["TextBox184"]);
const TextBox184Cb = useTextBox184Cb()
const Image62Props = useStore((state)=>state["Shop"]["Image62"]);
const Image62IoProps = useIoStore((state)=>state["Shop"]["Image62"]);
const Image62Cb = useImage62Cb()
const TextBox192Props = useStore((state)=>state["Shop"]["TextBox192"]);
const TextBox192IoProps = useIoStore((state)=>state["Shop"]["TextBox192"]);
const TextBox192Cb = useTextBox192Cb()
const TextBox193Props = useStore((state)=>state["Shop"]["TextBox193"]);
const TextBox193IoProps = useIoStore((state)=>state["Shop"]["TextBox193"]);
const TextBox193Cb = useTextBox193Cb()
const TextBox198Props = useStore((state)=>state["Shop"]["TextBox198"]);
const TextBox198IoProps = useIoStore((state)=>state["Shop"]["TextBox198"]);
const TextBox198Cb = useTextBox198Cb()
const TextBox199Props = useStore((state)=>state["Shop"]["TextBox199"]);
const TextBox199IoProps = useIoStore((state)=>state["Shop"]["TextBox199"]);
const TextBox199Cb = useTextBox199Cb()
const Image65Props = useStore((state)=>state["Shop"]["Image65"]);
const Image65IoProps = useIoStore((state)=>state["Shop"]["Image65"]);
const Image65Cb = useImage65Cb()
const TextBox200Props = useStore((state)=>state["Shop"]["TextBox200"]);
const TextBox200IoProps = useIoStore((state)=>state["Shop"]["TextBox200"]);
const TextBox200Cb = useTextBox200Cb()
const TextBox201Props = useStore((state)=>state["Shop"]["TextBox201"]);
const TextBox201IoProps = useIoStore((state)=>state["Shop"]["TextBox201"]);
const TextBox201Cb = useTextBox201Cb()
const Image66Props = useStore((state)=>state["Shop"]["Image66"]);
const Image66IoProps = useIoStore((state)=>state["Shop"]["Image66"]);
const Image66Cb = useImage66Cb()
const Image78Props = useStore((state)=>state["Shop"]["Image78"]);
const Image78IoProps = useIoStore((state)=>state["Shop"]["Image78"]);
const Image78Cb = useImage78Cb()
const Image77Props = useStore((state)=>state["Shop"]["Image77"]);
const Image77IoProps = useIoStore((state)=>state["Shop"]["Image77"]);
const Image77Cb = useImage77Cb()
const TextBox208Props = useStore((state)=>state["Shop"]["TextBox208"]);
const TextBox208IoProps = useIoStore((state)=>state["Shop"]["TextBox208"]);
const TextBox208Cb = useTextBox208Cb()
const Image76Props = useStore((state)=>state["Shop"]["Image76"]);
const Image76IoProps = useIoStore((state)=>state["Shop"]["Image76"]);
const Image76Cb = useImage76Cb()
const Dropdown12Props = useStore((state)=>state["Shop"]["Dropdown12"]);
const Dropdown12IoProps = useIoStore((state)=>state["Shop"]["Dropdown12"]);
const Dropdown12Cb = useDropdown12Cb()
const Dropdown13Props = useStore((state)=>state["Shop"]["Dropdown13"]);
const Dropdown13IoProps = useIoStore((state)=>state["Shop"]["Dropdown13"]);
const Dropdown13Cb = useDropdown13Cb()
const TextBox209Props = useStore((state)=>state["Shop"]["TextBox209"]);
const TextBox209IoProps = useIoStore((state)=>state["Shop"]["TextBox209"]);
const TextBox209Cb = useTextBox209Cb()
const TextBox215Props = useStore((state)=>state["Shop"]["TextBox215"]);
const TextBox215IoProps = useIoStore((state)=>state["Shop"]["TextBox215"]);
const TextBox215Cb = useTextBox215Cb()

  return (<>
  <Flex1 className="p-Shop headline bpt" {...headlineProps} {...headlineCb} {...headlineIoProps}>
<TextBox1 className="p-Shop TextBox149 bpt" {...TextBox149Props} {...TextBox149Cb} {...TextBox149IoProps}/>
</Flex1>
<Flex1 className="p-Shop navbar bpt" {...navbarProps} {...navbarCb} {...navbarIoProps}>
<Flex1 className="p-Shop Flex190 bpt" {...Flex190Props} {...Flex190Cb} {...Flex190IoProps}>
<Flex1 className="p-Shop Flex189 bpt" {...Flex189Props} {...Flex189Cb} {...Flex189IoProps}>
<TextBox1 className="p-Shop TextBox209 bpt" {...TextBox209Props} {...TextBox209Cb} {...TextBox209IoProps}/>
<TextBox1 className="p-Shop TextBox215 bpt" {...TextBox215Props} {...TextBox215Cb} {...TextBox215IoProps}/>
<Dropdown1 className="p-Shop Dropdown13 bpt" {...Dropdown13Props} {...Dropdown13Cb} {...Dropdown13IoProps}/>
<Dropdown1 className="p-Shop Dropdown12 bpt" {...Dropdown12Props} {...Dropdown12Cb} {...Dropdown12IoProps}/>
</Flex1>
<Image1 className="p-Shop Image78 bpt" {...Image78Props} {...Image78Cb} {...Image78IoProps}/>
<Flex1 className="p-Shop Flex188 bpt" {...Flex188Props} {...Flex188Cb} {...Flex188IoProps}>
<Image1 className="p-Shop Image77 bpt" {...Image77Props} {...Image77Cb} {...Image77IoProps}/>
<Flex1 className="p-Shop Flex187 bpt" {...Flex187Props} {...Flex187Cb} {...Flex187IoProps}>
<Image1 className="p-Shop Image76 bpt" {...Image76Props} {...Image76Cb} {...Image76IoProps}/>
<TextBox1 className="p-Shop TextBox208 bpt" {...TextBox208Props} {...TextBox208Cb} {...TextBox208IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-Shop banner bpt" {...bannerProps} {...bannerCb} {...bannerIoProps}>
<Flex1 className="p-Shop Flex145 bpt" {...Flex145Props} {...Flex145Cb} {...Flex145IoProps}>
<Flex1 className="p-Shop Flex144 bpt" {...Flex144Props} {...Flex144Cb} {...Flex144IoProps}>
<Flex1 className="p-Shop Flex143 bpt" {...Flex143Props} {...Flex143Cb} {...Flex143IoProps}>
<TextBox1 className="p-Shop TextBox178 bpt" {...TextBox178Props} {...TextBox178Cb} {...TextBox178IoProps}/>
<TextBox1 className="p-Shop TextBox177 bpt" {...TextBox177Props} {...TextBox177Cb} {...TextBox177IoProps}/>
<TextBox1 className="p-Shop TextBox176 bpt" {...TextBox176Props} {...TextBox176Cb} {...TextBox176IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-Shop shopsection bpt" {...shopsectionProps} {...shopsectionCb} {...shopsectionIoProps}>
<Flex1 className="p-Shop Flex154 bpt" {...Flex154Props} {...Flex154Cb} {...Flex154IoProps}>
<Flex1 className="p-Shop Flex153 bpt" {...Flex153Props} {...Flex153Cb} {...Flex153IoProps}>
<Flex1 className="p-Shop Flex152 bpt" {...Flex152Props} {...Flex152Cb} {...Flex152IoProps}>
<Flex1 className="p-Shop Flex149 bpt" {...Flex149Props} {...Flex149Cb} {...Flex149IoProps}>
<Image1 className="p-Shop Image58 bpt" {...Image58Props} {...Image58Cb} {...Image58IoProps}/>
<TextBox1 className="p-Shop TextBox184 bpt" {...TextBox184Props} {...TextBox184Cb} {...TextBox184IoProps}/>
<TextBox1 className="p-Shop TextBox183 bpt" {...TextBox183Props} {...TextBox183Cb} {...TextBox183IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-Shop Flex151 bpt" {...Flex151Props} {...Flex151Cb} {...Flex151IoProps}>
<Flex1 className="p-Shop Flex148 bpt" {...Flex148Props} {...Flex148Cb} {...Flex148IoProps}>
<Image1 className="p-Shop Image57 bpt" {...Image57Props} {...Image57Cb} {...Image57IoProps}/>
<TextBox1 className="p-Shop TextBox181 bpt" {...TextBox181Props} {...TextBox181Cb} {...TextBox181IoProps}/>
<TextBox1 className="p-Shop TextBox182 bpt" {...TextBox182Props} {...TextBox182Cb} {...TextBox182IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-Shop Flex150 bpt" {...Flex150Props} {...Flex150Cb} {...Flex150IoProps}>
<Flex1 className="p-Shop Flex147 bpt" {...Flex147Props} {...Flex147Cb} {...Flex147IoProps}>
<Image1 className="p-Shop Image56 bpt" {...Image56Props} {...Image56Cb} {...Image56IoProps}/>
<TextBox1 className="p-Shop TextBox179 bpt" {...TextBox179Props} {...TextBox179Cb} {...TextBox179IoProps}/>
<TextBox1 className="p-Shop TextBox180 bpt" {...TextBox180Props} {...TextBox180Cb} {...TextBox180IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-Shop Flex163 bpt" {...Flex163Props} {...Flex163Cb} {...Flex163IoProps}>
<Flex1 className="p-Shop Flex162 bpt" {...Flex162Props} {...Flex162Cb} {...Flex162IoProps}>
<Image1 className="p-Shop Image62 bpt" {...Image62Props} {...Image62Cb} {...Image62IoProps}/>
<TextBox1 className="p-Shop TextBox193 bpt" {...TextBox193Props} {...TextBox193Cb} {...TextBox193IoProps}/>
<TextBox1 className="p-Shop TextBox192 bpt" {...TextBox192Props} {...TextBox192Cb} {...TextBox192IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-Shop Flex169 bpt" {...Flex169Props} {...Flex169Cb} {...Flex169IoProps}>
<Flex1 className="p-Shop Flex168 bpt" {...Flex168Props} {...Flex168Cb} {...Flex168IoProps}>
<Image1 className="p-Shop Image65 bpt" {...Image65Props} {...Image65Cb} {...Image65IoProps}/>
<TextBox1 className="p-Shop TextBox198 bpt" {...TextBox198Props} {...TextBox198Cb} {...TextBox198IoProps}/>
<TextBox1 className="p-Shop TextBox199 bpt" {...TextBox199Props} {...TextBox199Cb} {...TextBox199IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-Shop Flex171 bpt" {...Flex171Props} {...Flex171Cb} {...Flex171IoProps}>
<Flex1 className="p-Shop Flex170 bpt" {...Flex170Props} {...Flex170Cb} {...Flex170IoProps}>
<Image1 className="p-Shop Image66 bpt" {...Image66Props} {...Image66Cb} {...Image66IoProps}/>
<TextBox1 className="p-Shop TextBox200 bpt" {...TextBox200Props} {...TextBox200Cb} {...TextBox200IoProps}/>
<TextBox1 className="p-Shop TextBox201 bpt" {...TextBox201Props} {...TextBox201Cb} {...TextBox201IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-Shop footer bpt" {...footerProps} {...footerCb} {...footerIoProps}>
<Flex1 className="p-Shop Flex141 bpt" {...Flex141Props} {...Flex141Cb} {...Flex141IoProps}>
<Flex1 className="p-Shop Flex140 bpt" {...Flex140Props} {...Flex140Cb} {...Flex140IoProps}>
<Image1 className="p-Shop Image54 bpt" {...Image54Props} {...Image54Cb} {...Image54IoProps}/>
<Flex1 className="p-Shop Flex138 bpt" {...Flex138Props} {...Flex138Cb} {...Flex138IoProps}>
<Flex1 className="p-Shop Flex135 bpt" {...Flex135Props} {...Flex135Cb} {...Flex135IoProps}>
<TextBox1 className="p-Shop TextBox173 bpt" {...TextBox173Props} {...TextBox173Cb} {...TextBox173IoProps}/>
<Flex1 className="p-Shop Flex131 bpt" {...Flex131Props} {...Flex131Cb} {...Flex131IoProps}>
<TextBox1 className="p-Shop TextBox169 bpt" {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
<TextBox1 className="p-Shop TextBox168 bpt" {...TextBox168Props} {...TextBox168Cb} {...TextBox168IoProps}/>
<TextBox1 className="p-Shop TextBox167 bpt" {...TextBox167Props} {...TextBox167Cb} {...TextBox167IoProps}/>
<TextBox1 className="p-Shop TextBox166 bpt" {...TextBox166Props} {...TextBox166Cb} {...TextBox166IoProps}/>
<TextBox1 className="p-Shop TextBox165 bpt" {...TextBox165Props} {...TextBox165Cb} {...TextBox165IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-Shop Flex134 bpt" {...Flex134Props} {...Flex134Cb} {...Flex134IoProps}>
<TextBox1 className="p-Shop TextBox172 bpt" {...TextBox172Props} {...TextBox172Cb} {...TextBox172IoProps}/>
<Flex1 className="p-Shop Flex130 bpt" {...Flex130Props} {...Flex130Cb} {...Flex130IoProps}>
<TextBox1 className="p-Shop TextBox160 bpt" {...TextBox160Props} {...TextBox160Cb} {...TextBox160IoProps}/>
<TextBox1 className="p-Shop TextBox161 bpt" {...TextBox161Props} {...TextBox161Cb} {...TextBox161IoProps}/>
<TextBox1 className="p-Shop TextBox162 bpt" {...TextBox162Props} {...TextBox162Cb} {...TextBox162IoProps}/>
<TextBox1 className="p-Shop TextBox163 bpt" {...TextBox163Props} {...TextBox163Cb} {...TextBox163IoProps}/>
<TextBox1 className="p-Shop TextBox164 bpt" {...TextBox164Props} {...TextBox164Cb} {...TextBox164IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-Shop Flex133 bpt" {...Flex133Props} {...Flex133Cb} {...Flex133IoProps}>
<TextBox1 className="p-Shop TextBox171 bpt" {...TextBox171Props} {...TextBox171Cb} {...TextBox171IoProps}/>
<Flex1 className="p-Shop Flex129 bpt" {...Flex129Props} {...Flex129Cb} {...Flex129IoProps}>
<TextBox1 className="p-Shop TextBox156 bpt" {...TextBox156Props} {...TextBox156Cb} {...TextBox156IoProps}/>
<TextBox1 className="p-Shop TextBox157 bpt" {...TextBox157Props} {...TextBox157Cb} {...TextBox157IoProps}/>
<TextBox1 className="p-Shop TextBox158 bpt" {...TextBox158Props} {...TextBox158Cb} {...TextBox158IoProps}/>
<TextBox1 className="p-Shop TextBox159 bpt" {...TextBox159Props} {...TextBox159Cb} {...TextBox159IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-Shop Flex132 bpt" {...Flex132Props} {...Flex132Cb} {...Flex132IoProps}>
<TextBox1 className="p-Shop TextBox170 bpt" {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
<Flex1 className="p-Shop Flex128 bpt" {...Flex128Props} {...Flex128Cb} {...Flex128IoProps}>
<TextBox1 className="p-Shop TextBox155 bpt" {...TextBox155Props} {...TextBox155Cb} {...TextBox155IoProps}/>
<TextBox1 className="p-Shop TextBox154 bpt" {...TextBox154Props} {...TextBox154Cb} {...TextBox154IoProps}/>
<TextBox1 className="p-Shop TextBox153 bpt" {...TextBox153Props} {...TextBox153Cb} {...TextBox153IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-Shop Flex139 bpt" {...Flex139Props} {...Flex139Cb} {...Flex139IoProps}>
<Flex1 className="p-Shop Flex137 bpt" {...Flex137Props} {...Flex137Cb} {...Flex137IoProps}>
<TextBox1 className="p-Shop TextBox175 bpt" {...TextBox175Props} {...TextBox175Cb} {...TextBox175IoProps}/>
<TextBox1 className="p-Shop TextBox174 bpt" {...TextBox174Props} {...TextBox174Cb} {...TextBox174IoProps}/>
</Flex1>
<Flex1 className="p-Shop Flex136 bpt" {...Flex136Props} {...Flex136Cb} {...Flex136IoProps}>
<Image1 className="p-Shop Image53 bpt" {...Image53Props} {...Image53Cb} {...Image53IoProps}/>
<Image1 className="p-Shop Image52 bpt" {...Image52Props} {...Image52Cb} {...Image52IoProps}/>
<Image1 className="p-Shop Image51 bpt" {...Image51Props} {...Image51Cb} {...Image51IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
  </>);
}
