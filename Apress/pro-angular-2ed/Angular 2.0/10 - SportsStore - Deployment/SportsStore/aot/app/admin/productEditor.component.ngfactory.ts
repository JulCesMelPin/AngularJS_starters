/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../app/admin/productEditor.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/model/product.repository';
import * as import9 from '@angular/router/src/router';
import * as import10 from '@angular/router/src/router_state';
import * as import11 from '../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import12 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import13 from '../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import14 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import15 from '../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from '@angular/common/src/location/location_strategy';
import * as import18 from '@angular/forms/src/directives/default_value_accessor';
import * as import19 from '@angular/forms/src/directives/control_value_accessor';
import * as import20 from '@angular/forms/src/directives/ng_model';
import * as import21 from '@angular/forms/src/directives/ng_control';
import * as import22 from '@angular/forms/src/directives/ng_control_status';
import * as import23 from '@angular/router/src/directives/router_link';
import * as import24 from '@angular/forms/src/directives/ng_form';
import * as import25 from '@angular/forms/src/directives/control_container';
export class Wrapper_ProductEditorComponent {
  /*private*/ _eventHandler:Function;
  context:import0.ProductEditorComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this.context = new import0.ProductEditorComponent(p0,p1,p2);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_ProductEditorComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_ProductEditorComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.ProductEditorComponent>;
  _ProductEditorComponent_0_3:Wrapper_ProductEditorComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ProductEditorComponent_Host0,renderType_ProductEditorComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ng-component',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_ProductEditorComponent0(this.viewUtils,this,0,this._el_0);
    this._ProductEditorComponent_0_3 = new Wrapper_ProductEditorComponent(this.injectorGet(import8.ProductRepository,this.parentIndex),this.injectorGet(import9.Router,this.parentIndex),this.injectorGet(import10.ActivatedRoute,this.parentIndex));
    this.compView_0.create(this._ProductEditorComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._ProductEditorComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ProductEditorComponent) && (0 === requestNodeIndex))) { return this._ProductEditorComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ProductEditorComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const ProductEditorComponentNgFactory:import7.ComponentFactory<import0.ProductEditorComponent> = new import7.ComponentFactory<import0.ProductEditorComponent>('ng-component',View_ProductEditorComponent_Host0,import0.ProductEditorComponent);
const styles_ProductEditorComponent:any[] = ([] as any[]);
var renderType_ProductEditorComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_ProductEditorComponent,{});
export class View_ProductEditorComponent0 extends import1.AppView<import0.ProductEditorComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _text_5:any;
  _el_6:any;
  _NgForm_6_3:import11.Wrapper_NgForm;
  _ControlContainer_6_4:any;
  _NgControlStatusGroup_6_5:import12.Wrapper_NgControlStatusGroup;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  _DefaultValueAccessor_13_3:import13.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_13_4:any[];
  _NgModel_13_5:import14.Wrapper_NgModel;
  _NgControl_13_6:any;
  _NgControlStatus_13_7:import12.Wrapper_NgControlStatus;
  _text_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _text_20:any;
  _el_21:any;
  _DefaultValueAccessor_21_3:import13.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_21_4:any[];
  _NgModel_21_5:import14.Wrapper_NgModel;
  _NgControl_21_6:any;
  _NgControlStatus_21_7:import12.Wrapper_NgControlStatus;
  _text_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _text_28:any;
  _el_29:any;
  _DefaultValueAccessor_29_3:import13.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_29_4:any[];
  _NgModel_29_5:import14.Wrapper_NgModel;
  _NgControl_29_6:any;
  _NgControlStatus_29_7:import12.Wrapper_NgControlStatus;
  _text_30:any;
  _text_31:any;
  _text_32:any;
  _el_33:any;
  _text_34:any;
  _el_35:any;
  _text_36:any;
  _text_37:any;
  _el_38:any;
  _DefaultValueAccessor_38_3:import13.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_38_4:any[];
  _NgModel_38_5:import14.Wrapper_NgModel;
  _NgControl_38_6:any;
  _NgControlStatus_38_7:import12.Wrapper_NgControlStatus;
  _text_39:any;
  _text_40:any;
  _el_41:any;
  _text_42:any;
  _text_43:any;
  _el_44:any;
  _RouterLink_44_3:import15.Wrapper_RouterLink;
  _text_45:any;
  _text_46:any;
  _text_47:any;
  /*private*/ _expr_72:any;
  /*private*/ _expr_73:any;
  /*private*/ _expr_74:any;
  /*private*/ _expr_75:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ProductEditorComponent0,renderType_ProductEditorComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._expr_72 = import6.UNINITIALIZED;
    this._expr_73 = import6.UNINITIALIZED;
    this._expr_74 = import6.UNINITIALIZED;
    this._expr_75 = import6.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','bg-primary p-a-1'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'h5',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_5 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,parentRenderNode,'form',new import3.InlineArray2(2,'novalidate',''),(null as any));
    this._NgForm_6_3 = new import11.Wrapper_NgForm((null as any),(null as any));
    this._ControlContainer_6_4 = this._NgForm_6_3.context;
    this._NgControlStatusGroup_6_5 = new import12.Wrapper_NgControlStatusGroup(this._ControlContainer_6_4);
    this._text_7 = this.renderer.createText(this._el_6,'\n    ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_6,'div',new import3.InlineArray2(2,'class','form-group'),(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'\n        ',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_8,'label',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'Name',(null as any));
    this._text_12 = this.renderer.createText(this._el_8,'\n        ',(null as any));
    this._el_13 = import3.createRenderElement(this.renderer,this._el_8,'input',new import3.InlineArray4(4,'class','form-control','name','name'),(null as any));
    this._DefaultValueAccessor_13_3 = new import13.Wrapper_DefaultValueAccessor(this.renderer,new import16.ElementRef(this._el_13));
    this._NG_VALUE_ACCESSOR_13_4 = [this._DefaultValueAccessor_13_3.context];
    this._NgModel_13_5 = new import14.Wrapper_NgModel(this._ControlContainer_6_4,(null as any),(null as any),this._NG_VALUE_ACCESSOR_13_4);
    this._NgControl_13_6 = this._NgModel_13_5.context;
    this._NgControlStatus_13_7 = new import12.Wrapper_NgControlStatus(this._NgControl_13_6);
    this._text_14 = this.renderer.createText(this._el_8,'\n    ',(null as any));
    this._text_15 = this.renderer.createText(this._el_6,'\n    ',(null as any));
    this._el_16 = import3.createRenderElement(this.renderer,this._el_6,'div',new import3.InlineArray2(2,'class','form-group'),(null as any));
    this._text_17 = this.renderer.createText(this._el_16,'\n        ',(null as any));
    this._el_18 = import3.createRenderElement(this.renderer,this._el_16,'label',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_19 = this.renderer.createText(this._el_18,'Category',(null as any));
    this._text_20 = this.renderer.createText(this._el_16,'\n        ',(null as any));
    this._el_21 = import3.createRenderElement(this.renderer,this._el_16,'input',new import3.InlineArray4(4,'class','form-control','name','category'),(null as any));
    this._DefaultValueAccessor_21_3 = new import13.Wrapper_DefaultValueAccessor(this.renderer,new import16.ElementRef(this._el_21));
    this._NG_VALUE_ACCESSOR_21_4 = [this._DefaultValueAccessor_21_3.context];
    this._NgModel_21_5 = new import14.Wrapper_NgModel(this._ControlContainer_6_4,(null as any),(null as any),this._NG_VALUE_ACCESSOR_21_4);
    this._NgControl_21_6 = this._NgModel_21_5.context;
    this._NgControlStatus_21_7 = new import12.Wrapper_NgControlStatus(this._NgControl_21_6);
    this._text_22 = this.renderer.createText(this._el_16,'\n    ',(null as any));
    this._text_23 = this.renderer.createText(this._el_6,'\n    ',(null as any));
    this._el_24 = import3.createRenderElement(this.renderer,this._el_6,'div',new import3.InlineArray2(2,'class','form-group'),(null as any));
    this._text_25 = this.renderer.createText(this._el_24,'\n        ',(null as any));
    this._el_26 = import3.createRenderElement(this.renderer,this._el_24,'label',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_27 = this.renderer.createText(this._el_26,'Description',(null as any));
    this._text_28 = this.renderer.createText(this._el_24,'\n        ',(null as any));
    this._el_29 = import3.createRenderElement(this.renderer,this._el_24,'textarea',new import3.InlineArray4(4,'class','form-control','name','description'),(null as any));
    this._DefaultValueAccessor_29_3 = new import13.Wrapper_DefaultValueAccessor(this.renderer,new import16.ElementRef(this._el_29));
    this._NG_VALUE_ACCESSOR_29_4 = [this._DefaultValueAccessor_29_3.context];
    this._NgModel_29_5 = new import14.Wrapper_NgModel(this._ControlContainer_6_4,(null as any),(null as any),this._NG_VALUE_ACCESSOR_29_4);
    this._NgControl_29_6 = this._NgModel_29_5.context;
    this._NgControlStatus_29_7 = new import12.Wrapper_NgControlStatus(this._NgControl_29_6);
    this._text_30 = this.renderer.createText(this._el_29,'        ',(null as any));
    this._text_31 = this.renderer.createText(this._el_24,'\n    ',(null as any));
    this._text_32 = this.renderer.createText(this._el_6,'\n    ',(null as any));
    this._el_33 = import3.createRenderElement(this.renderer,this._el_6,'div',new import3.InlineArray2(2,'class','form-group'),(null as any));
    this._text_34 = this.renderer.createText(this._el_33,'\n        ',(null as any));
    this._el_35 = import3.createRenderElement(this.renderer,this._el_33,'label',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_36 = this.renderer.createText(this._el_35,'Price',(null as any));
    this._text_37 = this.renderer.createText(this._el_33,'\n        ',(null as any));
    this._el_38 = import3.createRenderElement(this.renderer,this._el_33,'input',new import3.InlineArray4(4,'class','form-control','name','price'),(null as any));
    this._DefaultValueAccessor_38_3 = new import13.Wrapper_DefaultValueAccessor(this.renderer,new import16.ElementRef(this._el_38));
    this._NG_VALUE_ACCESSOR_38_4 = [this._DefaultValueAccessor_38_3.context];
    this._NgModel_38_5 = new import14.Wrapper_NgModel(this._ControlContainer_6_4,(null as any),(null as any),this._NG_VALUE_ACCESSOR_38_4);
    this._NgControl_38_6 = this._NgModel_38_5.context;
    this._NgControlStatus_38_7 = new import12.Wrapper_NgControlStatus(this._NgControl_38_6);
    this._text_39 = this.renderer.createText(this._el_33,'\n    ',(null as any));
    this._text_40 = this.renderer.createText(this._el_6,'\n    ',(null as any));
    this._el_41 = import3.createRenderElement(this.renderer,this._el_6,'button',new import3.InlineArray4(4,'class','btn btn-primary','type','submit'),(null as any));
    this._text_42 = this.renderer.createText(this._el_41,'',(null as any));
    this._text_43 = this.renderer.createText(this._el_6,'\n    ',(null as any));
    this._el_44 = import3.createRenderElement(this.renderer,this._el_6,'button',new import3.InlineArray8(6,'class','btn btn-secondary','routerLink','/admin/main/products','type','reset'),(null as any));
    this._RouterLink_44_3 = new import15.Wrapper_RouterLink(this.parentView.injectorGet(import9.Router,this.parentIndex),this.parentView.injectorGet(import10.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import17.LocationStrategy,this.parentIndex));
    this._text_45 = this.renderer.createText(this._el_44,'\n        Cancel\n    ',(null as any));
    this._text_46 = this.renderer.createText(this._el_6,'\n',(null as any));
    this._text_47 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_6,new import3.InlineArray8(6,'ngSubmit',(null as any),'submit',(null as any),'reset',(null as any)),this.eventHandler(this.handleEvent_6));
    this._NgForm_6_3.subscribe(this,this.eventHandler(this.handleEvent_6),true);
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_13,new import3.InlineArray8(6,'ngModelChange',(null as any),'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_13));
    this._NgModel_13_5.subscribe(this,this.eventHandler(this.handleEvent_13),true);
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_21,new import3.InlineArray8(6,'ngModelChange',(null as any),'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_21));
    this._NgModel_21_5.subscribe(this,this.eventHandler(this.handleEvent_21),true);
    var disposable_3:Function = import3.subscribeToRenderElement(this,this._el_29,new import3.InlineArray8(6,'ngModelChange',(null as any),'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_29));
    this._NgModel_29_5.subscribe(this,this.eventHandler(this.handleEvent_29),true);
    var disposable_4:Function = import3.subscribeToRenderElement(this,this._el_38,new import3.InlineArray8(6,'ngModelChange',(null as any),'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_38));
    this._NgModel_38_5.subscribe(this,this.eventHandler(this.handleEvent_38),true);
    var disposable_5:Function = import3.subscribeToRenderElement(this,this._el_44,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_44));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._text_20,
      this._el_21,
      this._text_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._text_28,
      this._el_29,
      this._text_30,
      this._text_31,
      this._text_32,
      this._el_33,
      this._text_34,
      this._el_35,
      this._text_36,
      this._text_37,
      this._el_38,
      this._text_39,
      this._text_40,
      this._el_41,
      this._text_42,
      this._text_43,
      this._el_44,
      this._text_45,
      this._text_46,
      this._text_47
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4,
      disposable_5
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.DefaultValueAccessor) && (13 === requestNodeIndex))) { return this._DefaultValueAccessor_13_3.context; }
    if (((token === import19.NG_VALUE_ACCESSOR) && (13 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_13_4; }
    if (((token === import20.NgModel) && (13 === requestNodeIndex))) { return this._NgModel_13_5.context; }
    if (((token === import21.NgControl) && (13 === requestNodeIndex))) { return this._NgControl_13_6; }
    if (((token === import22.NgControlStatus) && (13 === requestNodeIndex))) { return this._NgControlStatus_13_7.context; }
    if (((token === import18.DefaultValueAccessor) && (21 === requestNodeIndex))) { return this._DefaultValueAccessor_21_3.context; }
    if (((token === import19.NG_VALUE_ACCESSOR) && (21 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_21_4; }
    if (((token === import20.NgModel) && (21 === requestNodeIndex))) { return this._NgModel_21_5.context; }
    if (((token === import21.NgControl) && (21 === requestNodeIndex))) { return this._NgControl_21_6; }
    if (((token === import22.NgControlStatus) && (21 === requestNodeIndex))) { return this._NgControlStatus_21_7.context; }
    if (((token === import18.DefaultValueAccessor) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 30)))) { return this._DefaultValueAccessor_29_3.context; }
    if (((token === import19.NG_VALUE_ACCESSOR) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 30)))) { return this._NG_VALUE_ACCESSOR_29_4; }
    if (((token === import20.NgModel) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 30)))) { return this._NgModel_29_5.context; }
    if (((token === import21.NgControl) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 30)))) { return this._NgControl_29_6; }
    if (((token === import22.NgControlStatus) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 30)))) { return this._NgControlStatus_29_7.context; }
    if (((token === import18.DefaultValueAccessor) && (38 === requestNodeIndex))) { return this._DefaultValueAccessor_38_3.context; }
    if (((token === import19.NG_VALUE_ACCESSOR) && (38 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_38_4; }
    if (((token === import20.NgModel) && (38 === requestNodeIndex))) { return this._NgModel_38_5.context; }
    if (((token === import21.NgControl) && (38 === requestNodeIndex))) { return this._NgControl_38_6; }
    if (((token === import22.NgControlStatus) && (38 === requestNodeIndex))) { return this._NgControlStatus_38_7.context; }
    if (((token === import23.RouterLink) && ((44 <= requestNodeIndex) && (requestNodeIndex <= 45)))) { return this._RouterLink_44_3.context; }
    if (((token === import24.NgForm) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 46)))) { return this._NgForm_6_3.context; }
    if (((token === import25.ControlContainer) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 46)))) { return this._ControlContainer_6_4; }
    if (((token === import22.NgControlStatusGroup) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 46)))) { return this._NgControlStatusGroup_6_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._NgForm_6_3.ngDoCheck(this,this._el_6,throwOnChange);
    this._NgControlStatusGroup_6_5.ngDoCheck(this,this._el_6,throwOnChange);
    this._DefaultValueAccessor_13_3.ngDoCheck(this,this._el_13,throwOnChange);
    const currVal_13_1_0:any = 'name';
    this._NgModel_13_5.check_name(currVal_13_1_0,throwOnChange,false);
    const currVal_13_1_1:any = this.context.product.name;
    this._NgModel_13_5.check_model(currVal_13_1_1,throwOnChange,false);
    this._NgModel_13_5.ngDoCheck(this,this._el_13,throwOnChange);
    this._NgControlStatus_13_7.ngDoCheck(this,this._el_13,throwOnChange);
    this._DefaultValueAccessor_21_3.ngDoCheck(this,this._el_21,throwOnChange);
    const currVal_21_1_0:any = 'category';
    this._NgModel_21_5.check_name(currVal_21_1_0,throwOnChange,false);
    const currVal_21_1_1:any = this.context.product.category;
    this._NgModel_21_5.check_model(currVal_21_1_1,throwOnChange,false);
    this._NgModel_21_5.ngDoCheck(this,this._el_21,throwOnChange);
    this._NgControlStatus_21_7.ngDoCheck(this,this._el_21,throwOnChange);
    this._DefaultValueAccessor_29_3.ngDoCheck(this,this._el_29,throwOnChange);
    const currVal_29_1_0:any = 'description';
    this._NgModel_29_5.check_name(currVal_29_1_0,throwOnChange,false);
    const currVal_29_1_1:any = this.context.product.description;
    this._NgModel_29_5.check_model(currVal_29_1_1,throwOnChange,false);
    this._NgModel_29_5.ngDoCheck(this,this._el_29,throwOnChange);
    this._NgControlStatus_29_7.ngDoCheck(this,this._el_29,throwOnChange);
    this._DefaultValueAccessor_38_3.ngDoCheck(this,this._el_38,throwOnChange);
    const currVal_38_1_0:any = 'price';
    this._NgModel_38_5.check_name(currVal_38_1_0,throwOnChange,false);
    const currVal_38_1_1:any = this.context.product.price;
    this._NgModel_38_5.check_model(currVal_38_1_1,throwOnChange,false);
    this._NgModel_38_5.ngDoCheck(this,this._el_38,throwOnChange);
    this._NgControlStatus_38_7.ngDoCheck(this,this._el_38,throwOnChange);
    const currVal_44_0_0:any = '/admin/main/products';
    this._RouterLink_44_3.check_routerLink(currVal_44_0_0,throwOnChange,false);
    this._RouterLink_44_3.ngDoCheck(this,this._el_44,throwOnChange);
    const currVal_72:any = this.context.editing;
    if (import3.checkBinding(throwOnChange,this._expr_72,currVal_72)) {
      this.renderer.setElementClass(this._el_0,'bg-warning',currVal_72);
      this._expr_72 = currVal_72;
    }
    const currVal_73:any = import3.inlineInterpolate(1,'',(this.context.editing? 'Edit': 'Create'),' Product');
    if (import3.checkBinding(throwOnChange,this._expr_73,currVal_73)) {
      this.renderer.setText(this._text_3,currVal_73);
      this._expr_73 = currVal_73;
    }
    this._NgControlStatusGroup_6_5.checkHost(this,this,this._el_6,throwOnChange);
    this._NgControlStatus_13_7.checkHost(this,this,this._el_13,throwOnChange);
    this._NgControlStatus_21_7.checkHost(this,this,this._el_21,throwOnChange);
    this._NgControlStatus_29_7.checkHost(this,this,this._el_29,throwOnChange);
    this._NgControlStatus_38_7.checkHost(this,this,this._el_38,throwOnChange);
    const currVal_74:any = this.context.editing;
    if (import3.checkBinding(throwOnChange,this._expr_74,currVal_74)) {
      this.renderer.setElementClass(this._el_41,'btn-warning',currVal_74);
      this._expr_74 = currVal_74;
    }
    const currVal_75:any = import3.inlineInterpolate(1,'\n        ',(this.context.editing? 'Save': 'Create'),'\n    ');
    if (import3.checkBinding(throwOnChange,this._expr_75,currVal_75)) {
      this.renderer.setText(this._text_42,currVal_75);
      this._expr_75 = currVal_75;
    }
  }
  destroyInternal():void {
    this._NgModel_13_5.ngOnDestroy();
    this._NgModel_21_5.ngOnDestroy();
    this._NgModel_29_5.ngOnDestroy();
    this._NgModel_38_5.ngOnDestroy();
    this._NgForm_6_3.ngOnDestroy();
  }
  handleEvent_6(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._NgForm_6_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'ngSubmit')) {
      const pd_sub_0:any = ((<any>this.context.save(this._NgForm_6_3.context)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_13(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_13_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'ngModelChange')) {
      const pd_sub_0:any = ((<any>(this.context.product.name = $event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_21(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_21_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'ngModelChange')) {
      const pd_sub_0:any = ((<any>(this.context.product.category = $event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_29(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_29_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'ngModelChange')) {
      const pd_sub_0:any = ((<any>(this.context.product.description = $event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_38(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_38_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'ngModelChange')) {
      const pd_sub_0:any = ((<any>(this.context.product.price = $event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_44(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLink_44_3.handleEvent(eventName,$event) && result);
    return result;
  }
}