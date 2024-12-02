import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAsideStore from '../../store/useAsideStore';
import { Category, CategoryId } from '../../types/category';
import { fetchCategories } from '../../services/categoryApi';
import { useQuery } from '@tanstack/react-query';
import { ApiResponse } from '../../services/api';

function useAside() {
  const navigate = useNavigate();
  const { isAsideOpen, setIsAsideOpen } = useAsideStore();
  const [activeCategoryId, setActiveCategoryId] = useState<CategoryId>(undefined);
  const { data } = useQuery<ApiResponse<Category[]>>({ queryKey: ['categories'], queryFn: () => fetchCategories()});
  const category = data?.data;

  const handleCategorySelect = (categoryId: CategoryId) => {
    setActiveCategoryId(categoryId);
    navigate(`posts/${categoryId}`);
    setIsAsideOpen(false);
  };

  const handleOpenAside = () => setIsAsideOpen(true);
  const handleCloseAside = () => setIsAsideOpen(false);

  return {
    category,
    isAsideOpen,
    activeCategoryId,
    handleCategorySelect,
    handleOpenAside,
    handleCloseAside
  };
}

export default useAside;