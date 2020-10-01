<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('name', 'nom'),
            TextField::new('picture', 'Image'),
            TextField::new('password', 'Mot de passe')->onlyOnForms(),
            EmailField::new('email'),
            DateField::new('created_at', 'Date de création')->onlyOnIndex(),
            DateField::new('updated_at', 'Date de modification')->onlyOnIndex(),
            ArrayField::new('role')->onlyWhenUpdating(),

        ];
    }
    
}
