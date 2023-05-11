import {
  TemplateInfoModel,
  TemplateListGetResultModel,
  BcnAdjustInfoModel,
  BcnAdjustListGetResultModel,
  TemplateColInfoModel,
  TemplateColListGetResultModel,

 
} from './model/templateModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  // CategoryList = '/article/category/getCategoryTree',
  // CategoryAdd = '/article/category/add',
  // CategoryEdit = '/article/category/edit',
  // CategoryDelete = '/article/category/delete',
  // ArticleList = '/article/getByCondition',
  // ArticleInfo = '/article/detail',
  // ArticleAdd = '/article/add',
  // ArticleEdit = '/article/edit',
  // ArticleDelete = '/article/delete',
    TemplateList = '/report/tDataTemplate/getByCondition',
    BcnAdjustList = '/report/tReportBncAdjust/getByCondition',
    BcnAdjustAdd = '/report/tReportBncAdjust/add',
    BcnAdjustEdit = '/report/tReportBncAdjust/edit',
    TemplateColList = '/report/tDataTemplateCol/getColListByTemplateId',
}

export const getTemplateList = (params?: TemplateInfoModel) =>
  defHttp.get<TemplateListGetResultModel>({ url: Api.TemplateList, params });

  export const getBcnAdjustList = (params?: TemplateInfoModel) =>
  defHttp.get<BcnAdjustListGetResultModel>({ url: Api.BcnAdjustList, params });

  export const BcnAdjustAdd = (params: BcnAdjustInfoModel) =>
  defHttp.post({ url: Api.BcnAdjustAdd, params });
  export const BcnAdjustEdit = (params: BcnAdjustInfoModel) =>
  defHttp.post({ url: Api.BcnAdjustEdit, params });

  export const getTemplateColList = (id :number) =>
  defHttp.get<TemplateColListGetResultModel>({ url: Api.TemplateColList+'/' + id });

// export const CategoryAdd = (params: CategoryRequestModel) =>
//   defHttp.post({ url: Api.CategoryAdd, params });

// export const CategoryEdit = (params: CategoryRequestModel) =>
//   defHttp.post({ url: Api.CategoryEdit, params });

// export const CategoryDelete = (id: number) =>
//   defHttp.delete({ url: Api.CategoryDelete + '/' + id });

// export const getArticleList = (params?: ArticleInfoModel) =>
//   defHttp.get<ArticleListGetResultModel>({ url: Api.ArticleList, params });

// export const getArticleInfo = (id: number) => defHttp.get({ url: Api.ArticleInfo + '/' + id });

// export const ArticleAdd = (params: CategoryRequestModel) =>
//   defHttp.post({ url: Api.ArticleAdd, params });

// export const ArticleEdit = (params: CategoryRequestModel) =>
//   defHttp.post({ url: Api.ArticleEdit, params });

// export const ArticleDelete = (id: number) => defHttp.delete({ url: Api.ArticleDelete + '/' + id });
