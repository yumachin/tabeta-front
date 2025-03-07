import Button2 from '../_atoms/Button2';
import SplitLine from '../_atoms/SplitLine';
import SwitchLink from '../_atoms/SwitchLink';

export default function AuthFooter(props: {authMode: "sign-in" | "sign-up"}) {
  return (
    <>
      <div className="mt-6">
        <SplitLine />
        <Button2 authMode={props.authMode} />
      </div>
      <SwitchLink authMode={props.authMode}/>
    </>
  );
};