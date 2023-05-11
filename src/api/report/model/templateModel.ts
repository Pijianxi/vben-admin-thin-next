import { BasicFetchResult } from '/@/api/model/baseModel';



export interface TemplateInfoModel{

  id: string;
  code: string;
  name: string;
  subjectCode: string;
  subjectName: string;

}

export interface BcnAdjustInfoModel{

  id: number;
  year: number;
  month: number;
  monthTxt: string;
  org: string;
  orgTxt: string;
  subjectCode: string;
  subjectTxt: string;
  itemCode: string;
  itemTxt: string;
  channelCode: string;
  channelTxt: string;
  value: number;
  

}

export interface TemplateColInfoModel{

  id: number;
  templateId: number;
  templateCode: string;
  tableName: string;
  tableColumnName: string;
  columnDataType: string;
  inputType: string;
  colCode: string;
  colName: string;
  codeType: string;
  codeTypeName: string;
  isCondition: string;
  isNotNull: string;
  isShow:string;
  orderNo:number;
  

}


export interface TemplateListItem {
  id: string;
  orderNo: string;
  createTime: string;
  remark: string;
  status: number;
}

export interface TemplateSearchModel {
  categoryName?: string;
  status?: number;
}

// export interface ArticleInfoModel {
//   id: number;
//   title: string;
//   categoryId: number;
//   thumb: string[];
//   remark: string;
//   status: number;
// }

// export interface CategoryRequestModel {
//   id?: number;
//   categoryName: string;
//   orderNo: string;
//   parentCategory: string;
//   remark: string;
//   status: number;
// }

/**
 * @description: Request list return value
 */

// export type CategoryListGetResultModel = BasicFetchResult<CategoryListItem>;

// export type ArticleListGetResultModel = BasicFetchResult<ArticleInfoModel>;
export type TemplateListGetResultModel = BasicFetchResult<TemplateInfoModel>;
export type TemplateColListGetResultModel = BasicFetchResult<TemplateColInfoModel>;
export type BcnAdjustListGetResultModel = BasicFetchResult<BcnAdjustInfoModel>;
