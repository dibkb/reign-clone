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
import { Menu as Menu1 } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { usebannerCb, useFlex145Cb, useFlex144Cb, useFlex143Cb, useshopsectionCb, useFlex154Cb, useFlex153Cb, useFlex150Cb, useFlex147Cb, useFlex151Cb, useFlex148Cb, useFlex152Cb, useFlex149Cb, useFlex163Cb, useFlex162Cb, useFlex169Cb, useFlex168Cb, useFlex171Cb, useFlex170Cb, usenavbarCb, useFlex348Cb, useFlex346Cb, useFlex347Cb, useFlex345Cb, useheadlineCb, useFooterCb, useFlex388Cb, useFlex386Cb, useFlex383Cb, useFlex384Cb, useFlex387Cb, useFlex385Cb, useFlex379Cb, useFlex375Cb, useFlex380Cb, useFlex376Cb, useFlex381Cb, useFlex377Cb, useFlex382Cb, useFlex378Cb, useTextBox176Cb, useTextBox177Cb, useTextBox178Cb, useTextBox179Cb, useTextBox180Cb, useImage56Cb, useTextBox181Cb, useTextBox182Cb, useImage57Cb, useImage58Cb, useTextBox183Cb, useTextBox184Cb, useImage62Cb, useTextBox192Cb, useTextBox193Cb, useTextBox198Cb, useTextBox199Cb, useImage65Cb, useTextBox200Cb, useTextBox201Cb, useImage66Cb, useImage150Cb, useTextBox406Cb, useDropdown19Cb, useDropdown20Cb, useTextBox407Cb, useMenu2Cb, useImage149Cb, useTextBox405Cb, useImage148Cb, useTextBox149Cb, useImage161Cb, useImage162Cb, useImage163Cb, useTextBox461Cb, useTextBox462Cb, useImage164Cb, useTextBox457Cb, useTextBox440Cb, useTextBox441Cb, useTextBox442Cb, useTextBox458Cb, useTextBox443Cb, useTextBox444Cb, useTextBox445Cb, useTextBox446Cb, useTextBox459Cb, useTextBox447Cb, useTextBox448Cb, useTextBox449Cb, useTextBox450Cb, useTextBox451Cb, useTextBox460Cb, useTextBox452Cb, useTextBox453Cb, useTextBox454Cb, useTextBox455Cb, useTextBox456Cb } from "../page-cbs/Shop";
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
const Flex348Props = useStore((state)=>state["Shop"]["Flex348"]);
const Flex348IoProps = useIoStore((state)=>state["Shop"]["Flex348"]);
const Flex348Cb = useFlex348Cb()
const Flex346Props = useStore((state)=>state["Shop"]["Flex346"]);
const Flex346IoProps = useIoStore((state)=>state["Shop"]["Flex346"]);
const Flex346Cb = useFlex346Cb()
const Flex347Props = useStore((state)=>state["Shop"]["Flex347"]);
const Flex347IoProps = useIoStore((state)=>state["Shop"]["Flex347"]);
const Flex347Cb = useFlex347Cb()
const Flex345Props = useStore((state)=>state["Shop"]["Flex345"]);
const Flex345IoProps = useIoStore((state)=>state["Shop"]["Flex345"]);
const Flex345Cb = useFlex345Cb()
const headlineProps = useStore((state)=>state["Shop"]["headline"]);
const headlineIoProps = useIoStore((state)=>state["Shop"]["headline"]);
const headlineCb = useheadlineCb()
const FooterProps = useStore((state)=>state["Shop"]["Footer"]);
const FooterIoProps = useIoStore((state)=>state["Shop"]["Footer"]);
const FooterCb = useFooterCb()
const Flex388Props = useStore((state)=>state["Shop"]["Flex388"]);
const Flex388IoProps = useIoStore((state)=>state["Shop"]["Flex388"]);
const Flex388Cb = useFlex388Cb()
const Flex386Props = useStore((state)=>state["Shop"]["Flex386"]);
const Flex386IoProps = useIoStore((state)=>state["Shop"]["Flex386"]);
const Flex386Cb = useFlex386Cb()
const Flex383Props = useStore((state)=>state["Shop"]["Flex383"]);
const Flex383IoProps = useIoStore((state)=>state["Shop"]["Flex383"]);
const Flex383Cb = useFlex383Cb()
const Flex384Props = useStore((state)=>state["Shop"]["Flex384"]);
const Flex384IoProps = useIoStore((state)=>state["Shop"]["Flex384"]);
const Flex384Cb = useFlex384Cb()
const Flex387Props = useStore((state)=>state["Shop"]["Flex387"]);
const Flex387IoProps = useIoStore((state)=>state["Shop"]["Flex387"]);
const Flex387Cb = useFlex387Cb()
const Flex385Props = useStore((state)=>state["Shop"]["Flex385"]);
const Flex385IoProps = useIoStore((state)=>state["Shop"]["Flex385"]);
const Flex385Cb = useFlex385Cb()
const Flex379Props = useStore((state)=>state["Shop"]["Flex379"]);
const Flex379IoProps = useIoStore((state)=>state["Shop"]["Flex379"]);
const Flex379Cb = useFlex379Cb()
const Flex375Props = useStore((state)=>state["Shop"]["Flex375"]);
const Flex375IoProps = useIoStore((state)=>state["Shop"]["Flex375"]);
const Flex375Cb = useFlex375Cb()
const Flex380Props = useStore((state)=>state["Shop"]["Flex380"]);
const Flex380IoProps = useIoStore((state)=>state["Shop"]["Flex380"]);
const Flex380Cb = useFlex380Cb()
const Flex376Props = useStore((state)=>state["Shop"]["Flex376"]);
const Flex376IoProps = useIoStore((state)=>state["Shop"]["Flex376"]);
const Flex376Cb = useFlex376Cb()
const Flex381Props = useStore((state)=>state["Shop"]["Flex381"]);
const Flex381IoProps = useIoStore((state)=>state["Shop"]["Flex381"]);
const Flex381Cb = useFlex381Cb()
const Flex377Props = useStore((state)=>state["Shop"]["Flex377"]);
const Flex377IoProps = useIoStore((state)=>state["Shop"]["Flex377"]);
const Flex377Cb = useFlex377Cb()
const Flex382Props = useStore((state)=>state["Shop"]["Flex382"]);
const Flex382IoProps = useIoStore((state)=>state["Shop"]["Flex382"]);
const Flex382Cb = useFlex382Cb()
const Flex378Props = useStore((state)=>state["Shop"]["Flex378"]);
const Flex378IoProps = useIoStore((state)=>state["Shop"]["Flex378"]);
const Flex378Cb = useFlex378Cb()
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
const Image150Props = useStore((state)=>state["Shop"]["Image150"]);
const Image150IoProps = useIoStore((state)=>state["Shop"]["Image150"]);
const Image150Cb = useImage150Cb()
const TextBox406Props = useStore((state)=>state["Shop"]["TextBox406"]);
const TextBox406IoProps = useIoStore((state)=>state["Shop"]["TextBox406"]);
const TextBox406Cb = useTextBox406Cb()
const Dropdown19Props = useStore((state)=>state["Shop"]["Dropdown19"]);
const Dropdown19IoProps = useIoStore((state)=>state["Shop"]["Dropdown19"]);
const Dropdown19Cb = useDropdown19Cb()
const Dropdown20Props = useStore((state)=>state["Shop"]["Dropdown20"]);
const Dropdown20IoProps = useIoStore((state)=>state["Shop"]["Dropdown20"]);
const Dropdown20Cb = useDropdown20Cb()
const TextBox407Props = useStore((state)=>state["Shop"]["TextBox407"]);
const TextBox407IoProps = useIoStore((state)=>state["Shop"]["TextBox407"]);
const TextBox407Cb = useTextBox407Cb()
const Menu2Props = useStore((state)=>state["Shop"]["Menu2"]);
const Menu2IoProps = useIoStore((state)=>state["Shop"]["Menu2"]);
const Menu2Cb = useMenu2Cb()
const Image149Props = useStore((state)=>state["Shop"]["Image149"]);
const Image149IoProps = useIoStore((state)=>state["Shop"]["Image149"]);
const Image149Cb = useImage149Cb()
const TextBox405Props = useStore((state)=>state["Shop"]["TextBox405"]);
const TextBox405IoProps = useIoStore((state)=>state["Shop"]["TextBox405"]);
const TextBox405Cb = useTextBox405Cb()
const Image148Props = useStore((state)=>state["Shop"]["Image148"]);
const Image148IoProps = useIoStore((state)=>state["Shop"]["Image148"]);
const Image148Cb = useImage148Cb()
const TextBox149Props = useStore((state)=>state["Shop"]["TextBox149"]);
const TextBox149IoProps = useIoStore((state)=>state["Shop"]["TextBox149"]);
const TextBox149Cb = useTextBox149Cb()
const Image161Props = useStore((state)=>state["Shop"]["Image161"]);
const Image161IoProps = useIoStore((state)=>state["Shop"]["Image161"]);
const Image161Cb = useImage161Cb()
const Image162Props = useStore((state)=>state["Shop"]["Image162"]);
const Image162IoProps = useIoStore((state)=>state["Shop"]["Image162"]);
const Image162Cb = useImage162Cb()
const Image163Props = useStore((state)=>state["Shop"]["Image163"]);
const Image163IoProps = useIoStore((state)=>state["Shop"]["Image163"]);
const Image163Cb = useImage163Cb()
const TextBox461Props = useStore((state)=>state["Shop"]["TextBox461"]);
const TextBox461IoProps = useIoStore((state)=>state["Shop"]["TextBox461"]);
const TextBox461Cb = useTextBox461Cb()
const TextBox462Props = useStore((state)=>state["Shop"]["TextBox462"]);
const TextBox462IoProps = useIoStore((state)=>state["Shop"]["TextBox462"]);
const TextBox462Cb = useTextBox462Cb()
const Image164Props = useStore((state)=>state["Shop"]["Image164"]);
const Image164IoProps = useIoStore((state)=>state["Shop"]["Image164"]);
const Image164Cb = useImage164Cb()
const TextBox457Props = useStore((state)=>state["Shop"]["TextBox457"]);
const TextBox457IoProps = useIoStore((state)=>state["Shop"]["TextBox457"]);
const TextBox457Cb = useTextBox457Cb()
const TextBox440Props = useStore((state)=>state["Shop"]["TextBox440"]);
const TextBox440IoProps = useIoStore((state)=>state["Shop"]["TextBox440"]);
const TextBox440Cb = useTextBox440Cb()
const TextBox441Props = useStore((state)=>state["Shop"]["TextBox441"]);
const TextBox441IoProps = useIoStore((state)=>state["Shop"]["TextBox441"]);
const TextBox441Cb = useTextBox441Cb()
const TextBox442Props = useStore((state)=>state["Shop"]["TextBox442"]);
const TextBox442IoProps = useIoStore((state)=>state["Shop"]["TextBox442"]);
const TextBox442Cb = useTextBox442Cb()
const TextBox458Props = useStore((state)=>state["Shop"]["TextBox458"]);
const TextBox458IoProps = useIoStore((state)=>state["Shop"]["TextBox458"]);
const TextBox458Cb = useTextBox458Cb()
const TextBox443Props = useStore((state)=>state["Shop"]["TextBox443"]);
const TextBox443IoProps = useIoStore((state)=>state["Shop"]["TextBox443"]);
const TextBox443Cb = useTextBox443Cb()
const TextBox444Props = useStore((state)=>state["Shop"]["TextBox444"]);
const TextBox444IoProps = useIoStore((state)=>state["Shop"]["TextBox444"]);
const TextBox444Cb = useTextBox444Cb()
const TextBox445Props = useStore((state)=>state["Shop"]["TextBox445"]);
const TextBox445IoProps = useIoStore((state)=>state["Shop"]["TextBox445"]);
const TextBox445Cb = useTextBox445Cb()
const TextBox446Props = useStore((state)=>state["Shop"]["TextBox446"]);
const TextBox446IoProps = useIoStore((state)=>state["Shop"]["TextBox446"]);
const TextBox446Cb = useTextBox446Cb()
const TextBox459Props = useStore((state)=>state["Shop"]["TextBox459"]);
const TextBox459IoProps = useIoStore((state)=>state["Shop"]["TextBox459"]);
const TextBox459Cb = useTextBox459Cb()
const TextBox447Props = useStore((state)=>state["Shop"]["TextBox447"]);
const TextBox447IoProps = useIoStore((state)=>state["Shop"]["TextBox447"]);
const TextBox447Cb = useTextBox447Cb()
const TextBox448Props = useStore((state)=>state["Shop"]["TextBox448"]);
const TextBox448IoProps = useIoStore((state)=>state["Shop"]["TextBox448"]);
const TextBox448Cb = useTextBox448Cb()
const TextBox449Props = useStore((state)=>state["Shop"]["TextBox449"]);
const TextBox449IoProps = useIoStore((state)=>state["Shop"]["TextBox449"]);
const TextBox449Cb = useTextBox449Cb()
const TextBox450Props = useStore((state)=>state["Shop"]["TextBox450"]);
const TextBox450IoProps = useIoStore((state)=>state["Shop"]["TextBox450"]);
const TextBox450Cb = useTextBox450Cb()
const TextBox451Props = useStore((state)=>state["Shop"]["TextBox451"]);
const TextBox451IoProps = useIoStore((state)=>state["Shop"]["TextBox451"]);
const TextBox451Cb = useTextBox451Cb()
const TextBox460Props = useStore((state)=>state["Shop"]["TextBox460"]);
const TextBox460IoProps = useIoStore((state)=>state["Shop"]["TextBox460"]);
const TextBox460Cb = useTextBox460Cb()
const TextBox452Props = useStore((state)=>state["Shop"]["TextBox452"]);
const TextBox452IoProps = useIoStore((state)=>state["Shop"]["TextBox452"]);
const TextBox452Cb = useTextBox452Cb()
const TextBox453Props = useStore((state)=>state["Shop"]["TextBox453"]);
const TextBox453IoProps = useIoStore((state)=>state["Shop"]["TextBox453"]);
const TextBox453Cb = useTextBox453Cb()
const TextBox454Props = useStore((state)=>state["Shop"]["TextBox454"]);
const TextBox454IoProps = useIoStore((state)=>state["Shop"]["TextBox454"]);
const TextBox454Cb = useTextBox454Cb()
const TextBox455Props = useStore((state)=>state["Shop"]["TextBox455"]);
const TextBox455IoProps = useIoStore((state)=>state["Shop"]["TextBox455"]);
const TextBox455Cb = useTextBox455Cb()
const TextBox456Props = useStore((state)=>state["Shop"]["TextBox456"]);
const TextBox456IoProps = useIoStore((state)=>state["Shop"]["TextBox456"]);
const TextBox456Cb = useTextBox456Cb()

  return (<>
  <Flex1 className="p-Shop headline bpt" {...headlineProps} {...headlineCb} {...headlineIoProps}>
<TextBox1 className="p-Shop TextBox149 bpt" {...TextBox149Props} {...TextBox149Cb} {...TextBox149IoProps}/>
</Flex1>
<Flex1 className="p-Shop navbar bpt" {...navbarProps} {...navbarCb} {...navbarIoProps}>
<Flex1 className="p-Shop Flex348 bpt" {...Flex348Props} {...Flex348Cb} {...Flex348IoProps}>
<Flex1 className="p-Shop Flex346 bpt" {...Flex346Props} {...Flex346Cb} {...Flex346IoProps}>
<TextBox1 className="p-Shop TextBox407 bpt" {...TextBox407Props} {...TextBox407Cb} {...TextBox407IoProps}/>
<TextBox1 className="p-Shop TextBox406 bpt" {...TextBox406Props} {...TextBox406Cb} {...TextBox406IoProps}/>
<Dropdown1 className="p-Shop Dropdown20 bpt" {...Dropdown20Props} {...Dropdown20Cb} {...Dropdown20IoProps}/>
<Dropdown1 className="p-Shop Dropdown19 bpt" {...Dropdown19Props} {...Dropdown19Cb} {...Dropdown19IoProps}/>
</Flex1>
<Image1 className="p-Shop Image150 bpt" {...Image150Props} {...Image150Cb} {...Image150IoProps}/>
<Flex1 className="p-Shop Flex347 bpt" {...Flex347Props} {...Flex347Cb} {...Flex347IoProps}>
<Image1 className="p-Shop Image149 bpt" {...Image149Props} {...Image149Cb} {...Image149IoProps}/>
<Flex1 className="p-Shop Flex345 bpt" {...Flex345Props} {...Flex345Cb} {...Flex345IoProps}>
<Image1 className="p-Shop Image148 bpt" {...Image148Props} {...Image148Cb} {...Image148IoProps}/>
<TextBox1 className="p-Shop TextBox405 bpt" {...TextBox405Props} {...TextBox405Cb} {...TextBox405IoProps}/>
</Flex1>
<Menu1 className="p-Shop Menu2 bpt" {...Menu2Props} {...Menu2Cb} {...Menu2IoProps}/>
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
<Flex1 className="p-Shop Footer bpt" {...FooterProps} {...FooterCb} {...FooterIoProps}>
<Flex1 className="p-Shop Flex388 bpt" {...Flex388Props} {...Flex388Cb} {...Flex388IoProps}>
<Flex1 className="p-Shop Flex387 bpt" {...Flex387Props} {...Flex387Cb} {...Flex387IoProps}>
<Image1 className="p-Shop Image164 bpt" {...Image164Props} {...Image164Cb} {...Image164IoProps}/>
<Flex1 className="p-Shop Flex385 bpt" {...Flex385Props} {...Flex385Cb} {...Flex385IoProps}>
<Flex1 className="p-Shop Flex382 bpt" {...Flex382Props} {...Flex382Cb} {...Flex382IoProps}>
<TextBox1 className="p-Shop TextBox460 bpt" {...TextBox460Props} {...TextBox460Cb} {...TextBox460IoProps}/>
<Flex1 className="p-Shop Flex378 bpt" {...Flex378Props} {...Flex378Cb} {...Flex378IoProps}>
<TextBox1 className="p-Shop TextBox456 bpt" {...TextBox456Props} {...TextBox456Cb} {...TextBox456IoProps}/>
<TextBox1 className="p-Shop TextBox455 bpt" {...TextBox455Props} {...TextBox455Cb} {...TextBox455IoProps}/>
<TextBox1 className="p-Shop TextBox454 bpt" {...TextBox454Props} {...TextBox454Cb} {...TextBox454IoProps}/>
<TextBox1 className="p-Shop TextBox453 bpt" {...TextBox453Props} {...TextBox453Cb} {...TextBox453IoProps}/>
<TextBox1 className="p-Shop TextBox452 bpt" {...TextBox452Props} {...TextBox452Cb} {...TextBox452IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-Shop Flex381 bpt" {...Flex381Props} {...Flex381Cb} {...Flex381IoProps}>
<TextBox1 className="p-Shop TextBox459 bpt" {...TextBox459Props} {...TextBox459Cb} {...TextBox459IoProps}/>
<Flex1 className="p-Shop Flex377 bpt" {...Flex377Props} {...Flex377Cb} {...Flex377IoProps}>
<TextBox1 className="p-Shop TextBox447 bpt" {...TextBox447Props} {...TextBox447Cb} {...TextBox447IoProps}/>
<TextBox1 className="p-Shop TextBox448 bpt" {...TextBox448Props} {...TextBox448Cb} {...TextBox448IoProps}/>
<TextBox1 className="p-Shop TextBox449 bpt" {...TextBox449Props} {...TextBox449Cb} {...TextBox449IoProps}/>
<TextBox1 className="p-Shop TextBox450 bpt" {...TextBox450Props} {...TextBox450Cb} {...TextBox450IoProps}/>
<TextBox1 className="p-Shop TextBox451 bpt" {...TextBox451Props} {...TextBox451Cb} {...TextBox451IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-Shop Flex380 bpt" {...Flex380Props} {...Flex380Cb} {...Flex380IoProps}>
<TextBox1 className="p-Shop TextBox458 bpt" {...TextBox458Props} {...TextBox458Cb} {...TextBox458IoProps}/>
<Flex1 className="p-Shop Flex376 bpt" {...Flex376Props} {...Flex376Cb} {...Flex376IoProps}>
<TextBox1 className="p-Shop TextBox443 bpt" {...TextBox443Props} {...TextBox443Cb} {...TextBox443IoProps}/>
<TextBox1 className="p-Shop TextBox444 bpt" {...TextBox444Props} {...TextBox444Cb} {...TextBox444IoProps}/>
<TextBox1 className="p-Shop TextBox445 bpt" {...TextBox445Props} {...TextBox445Cb} {...TextBox445IoProps}/>
<TextBox1 className="p-Shop TextBox446 bpt" {...TextBox446Props} {...TextBox446Cb} {...TextBox446IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-Shop Flex379 bpt" {...Flex379Props} {...Flex379Cb} {...Flex379IoProps}>
<TextBox1 className="p-Shop TextBox457 bpt" {...TextBox457Props} {...TextBox457Cb} {...TextBox457IoProps}/>
<Flex1 className="p-Shop Flex375 bpt" {...Flex375Props} {...Flex375Cb} {...Flex375IoProps}>
<TextBox1 className="p-Shop TextBox442 bpt" {...TextBox442Props} {...TextBox442Cb} {...TextBox442IoProps}/>
<TextBox1 className="p-Shop TextBox441 bpt" {...TextBox441Props} {...TextBox441Cb} {...TextBox441IoProps}/>
<TextBox1 className="p-Shop TextBox440 bpt" {...TextBox440Props} {...TextBox440Cb} {...TextBox440IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-Shop Flex386 bpt" {...Flex386Props} {...Flex386Cb} {...Flex386IoProps}>
<Flex1 className="p-Shop Flex384 bpt" {...Flex384Props} {...Flex384Cb} {...Flex384IoProps}>
<TextBox1 className="p-Shop TextBox462 bpt" {...TextBox462Props} {...TextBox462Cb} {...TextBox462IoProps}/>
<TextBox1 className="p-Shop TextBox461 bpt" {...TextBox461Props} {...TextBox461Cb} {...TextBox461IoProps}/>
</Flex1>
<Flex1 className="p-Shop Flex383 bpt" {...Flex383Props} {...Flex383Cb} {...Flex383IoProps}>
<Image1 className="p-Shop Image163 bpt" {...Image163Props} {...Image163Cb} {...Image163IoProps}/>
<Image1 className="p-Shop Image162 bpt" {...Image162Props} {...Image162Cb} {...Image162IoProps}/>
<Image1 className="p-Shop Image161 bpt" {...Image161Props} {...Image161Cb} {...Image161IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
  </>);
}
