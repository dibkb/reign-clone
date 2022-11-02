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
import { useheadlineCb, usenavbarCb, useFlex196Cb, useFlex194Cb, useFlex193Cb, useFlex195Cb, useItem_infoCb, useFlex202Cb, useFlex201Cb, useFlex200Cb, useFlex204Cb, useTextBox210Cb, useImage81Cb, useImage80Cb, useTextBox211Cb, useImage79Cb, useDropdown14Cb, useDropdown15Cb, useTextBox212Cb, useTextBox213Cb, useImage82Cb, useTextBox218Cb, useTextBox219Cb, useTextBox220Cb, useTextBox221Cb, useDropdown17Cb, useTextBox222Cb } from "../page-cbs/Product";
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
const Flex204Props = useStore((state)=>state["Product"]["Flex204"]);
const Flex204IoProps = useIoStore((state)=>state["Product"]["Flex204"]);
const Flex204Cb = useFlex204Cb()
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
const Dropdown17Props = useStore((state)=>state["Product"]["Dropdown17"]);
const Dropdown17IoProps = useIoStore((state)=>state["Product"]["Dropdown17"]);
const Dropdown17Cb = useDropdown17Cb()
const TextBox222Props = useStore((state)=>state["Product"]["TextBox222"]);
const TextBox222IoProps = useIoStore((state)=>state["Product"]["TextBox222"]);
const TextBox222Cb = useTextBox222Cb()

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
<Flex2 className="p-Product Flex204 bpt" {...Flex204Props} {...Flex204Cb} {...Flex204IoProps}>
<TextBox2 className="p-Product TextBox222 bpt" {...TextBox222Props} {...TextBox222Cb} {...TextBox222IoProps}/>
</Flex2>
<Dropdown2 className="p-Product Dropdown17 bpt" {...Dropdown17Props} {...Dropdown17Cb} {...Dropdown17IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
  </>);
}
